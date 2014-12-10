Import-Module .\scripts\evlogfuncs.psm1
Import-Module .\scripts\servicefuncs.psm1

$configRelPath = ".\bin\Markel.REMUS.*.exe.config"
$configFile = (Get-ChildItem $configRelPath).FullName

$logName = Get-ServiceSetting $configFile EventLogName
$applicationName = Get-ServiceSetting $configFile ServiceName

Dump-DeploymentEvents $logName $applicationName
