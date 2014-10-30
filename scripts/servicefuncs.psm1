function Get-ServiceSetting($configFile, $key) {
	$svcConfig = New-Object XML
	$svcConfig.Load($configFile)
	$settingValue = $null
	
	foreach($setting in $svcConfig.configuration.serviceSettings.add) {
		if ($setting.key -eq $key){
			$settingValue = $setting.Value
			return $settingValue
		}
	}

	if ($settingValue -eq $null) {
		throw "service setting for $key not found in $configFile"
	}
}