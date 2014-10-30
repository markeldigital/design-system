function Get-DeployEnvironment() {
  $octoEnvironment = "local"
  if( $OctopusParameters -ne $null ){
    $octoEnvironment = $OctopusParameters["Octopus.Environment.Name"]
  }
  return $octoEnvironment
}

function Get-DeployRelease() {
  $octoRelease = "local"
  if( $OctopusParameters -ne $null ){
    $octoRelease = $OctopusParameters["Octopus.Release.Number"]
  }
  return $octoRelease
}

## key HKLM\SOFTWARE\Markel\Remus\{environment}\{app}\LastStartedRelease = Get-DeployRelease
## key HKLM\SOFTWARE\Markel\Remus\{environment}\{app}\LastStartedReleaseDate = 
## key HKLM\SOFTWARE\Markel\Remus\{environment}\{app}\LastFinishedRelease = 
## key HKLM\SOFTWARE\Markel\Remus\{environment}\{app}\LastFinishedReleaseDate = 

function Register-Deployment($applicationName) {
  $environment = Get-DeployEnvironment
  $release = Get-DeployRelease
  $timestamp = (get-date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffzzz")

  $registryPath = "HKLM:SOFTWARE\Markel\Remus\${environment}\${applicationName}"

  if( -Not (Test-Path $registryPath) ) {
    $ignore = New-Item -Force -Path $registryPath
	$ignore = New-ItemProperty -Path $registryPath -Name LastStartedRelease -Value "$release"
	$ignore = New-ItemProperty -Path $registryPath -Name LastStartedDeployDate -Value "$timestamp"
  } else {
  	$ignore = Set-ItemProperty -Path $registryPath -Name LastStartedRelease -Value "$release"
	$ignore = Set-ItemProperty -Path $registryPath -Name LastStartedDeployDate -Value "$timestamp"
  }
}
