Import-Module .\scripts\netshfuncs.psm1
Import-Module .\scripts\servicefuncs.psm1

$configRelPath = ".\bin\Markel.REMUS.*.exe.config"
$configFile = (Get-ChildItem $configRelPath).FullName

$port = Get-ServiceSetting $configFile Port

Set-URLReservation "http://+:$port/"