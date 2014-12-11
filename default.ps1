Import-Module .\scripts\sqlfuncs.psm1
Import-Module .\scripts\evlogfuncs.psm1
Import-Module .\scripts\servicefuncs.psm1
Import-Module .\scripts\netshfuncs.psm1
Import-Module .\scripts\thirdParty\sqlPacksLib.psm1

properties {
		$rootDir = "$pwd"
		$loginUser =  [System.Security.Principal.WindowsIdentity]::GetCurrent().Name					
		$slnBaseName = "REMUS.DesignSystem.Web"
		$slnFile = (Resolve-Path $rootDir\$($slnBaseName).sln)
		$scriptsDir = "$rootDir"
		$packagesDir = "$rootDir\packages"
		$toolsDir = "$rootDir\tools"
		$outputDir  = "$rootDir\output"
		$deployDir = "$rootDir\..\..\ServiceDeploy"
		$msbuild = "$Env:winDir\Microsoft.NET\Framework64\v4.0.30319\msbuild.exe"

		$services = @(
			@{"project" = "Markel.REMUS.DigitalBrandSystem"; "port" = "3570"}
		)
}

task default -Depends Clean, Compile 

task Fast -Depends Clean, Compile

task Clean {
	Exec { iex "$msbuild $slnFile /t:clean /v:m /nologo /p:Configuration=Debug" } "Build Failed - Clean"
}

task Compile -Depends Clean, CleanBins {
	Exec { iex "$msbuild $slnFile /v:m /p:Configuration=Debug" } "Build Failed - Compilation"
}

task CleanBins {
	remove-item *\bin\Debug\* -recurse -force -ErrorAction SilentlyContinue
	remove-item *\bin\Release\* -recurse -force -ErrorAction SilentlyContinue
}

task RegisterPorts {
	foreach ($project in $services)
	{
        $port = $project["port"]
		Set-URLReservation "http://+:$port/" 
	}
}

task Run {
	foreach ($service in $services)
	{
		$serviceName = $service["project"]
		$fileName = $serviceName + "\bin\Debug\" + $serviceName + ".exe"
		# I have no idea how to run a project in new window in PS, so I'm launching cmd to run cmd in new window from it. 
		# If you can, fix it :/ Aleks, 02/07/2014
		Exec { iex "cmd /c 'start cmd.exe /k $fileName'" }
	}
}

task Stop {
	Stop-Process -ProcessName cmd
	foreach ($service in $services)
	{
		$serviceName = $service["project"]
		Stop-Process -ProcessName $serviceName
	}
}



