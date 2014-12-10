Import-Module .\scripts\deployfuncs.psm1
Import-Module .\scripts\evlogfuncs.psm1
Import-Module .\scripts\servicefuncs.psm1

$configRelPath = ".\bin\Markel.REMUS.*.exe.config"
$configFile = (Get-ChildItem $configRelPath).FullName

$logName = Get-ServiceSetting $configFile EventLogName
$applicationName = Get-ServiceSetting $configFile ServiceName

Create-EventLogDestination $logName $applicationName

Register-Deployment $applicationName