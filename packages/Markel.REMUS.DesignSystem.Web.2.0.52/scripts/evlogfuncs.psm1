function Create-EventLogDestination($logName, $applicationName) {	

	try {
		New-EventLog -LogName $logName -Source $applicationName -ErrorAction Stop
	} catch [System.Exception]{
		write-host Caught $_.Exception.GetType().FullName ": Assuming EventLog $applicationName/$logName already exists"
	}
	$appRelease = Get-DeployRelease
	$appEnvironment = Get-DeployEnvironment
	$deploymentMessage = "Application Deployment - $appEnvironment/$appRelease"

	Write-Eventlog -LogName $logName -Source $applicationName -EventID 1 -EntryType Information -Message $deploymentMessage 
}

function Get-DeploymentEvents($logName, $applicationName) {
  $events = @()

  $keepAppending = $True
  Get-EventLog -Logname $logName -Source $applicationName | ForEach-Object {
 
   if ($_.Message.StartsWith('Application Deployment'))
    { 
      $keepAppending = $False
    }
    if( $keepAppending) { 
      $events += $_
    }
  }

  return $events
}

function Dump-DeploymentEvents($logName,$applicationName) {
  $events = Get-DeploymentEvents $logName $applicationName

  Write-Host "Event log from $logName for $applicationName"
  if( $events -ne $null) {
	Write-Host
    $events | Foreach-Object {
      Write-Host ("Time: {0}, EntryType: {1}, Index: {2}" -f $_.TimeGenerated, $_.EntryType, $_.Index)

      Write-Host "Message:"
	  if ($_.EntryType -eq "Error") {
	    Write-Error ("  {0}" -f $_.Message)
	  } else {
        Write-Host ("  {0}" -f $_.Message)
      }
	  Write-Host 
    }
  } else {
    Write-Host "No events found."
  }

}
