$nuget = ".\packages\NuGet.CommandLine.2.8.2\tools\NuGet.exe"
function InstallLocalData() {	
	$addHttpProxyBack = $false;
	$addHttpsProxyBack = $false;
	
	if (Test-Path -Path Env:\HTTP_PROXY) {
		Remove-Item Env:\HTTP_PROXY
		$addHttpProxyBack = $true;
	}
	
	if (Test-Path -Path Env:\HTTPS_PROXY) {
		Remove-Item Env:\HTTPS_PROXY
		$addHttpsProxyBack = $true;
	}
	
	Remove-Item Markel.REMUS.Datapacks.AccessController.Live.* -Recurse
	Remove-Item Markel.REMUS.Datapacks.BrokerRepository.Live.* -Recurse	

	& "$nuget" install Markel.REMUS.Datapacks.AccessController.Live -source http://segvml033.segmint.local:8080/guestAuth/app/nuget/v1/FeedService.svc
	pushd
	cd Markel.REMUS.Datapacks.AccessController.Live.*
	.\deploy.ps1
	popd

	& "$nuget"  install Markel.REMUS.Datapacks.BrokerRepository.Live -source http://segvml033.segmint.local:8080/guestAuth/app/nuget/v1/FeedService.svc
	pushd
	cd Markel.REMUS.Datapacks.BrokerRepository.Live.*
	.\deploy.ps1
	popd	

	if($addHttpProxyBack) {
		Set-Item Env:\HTTP_PROXY http://lonpr.markelintl.markelgroup.com:8080
	}
	if($addHttpsProxyBack) {
		Set-Item Env:\HTTPS_PROXY https://lonpr.markelintl.markelgroup.com:8080
	}
	Remove-Item Markel.REMUS.Datapacks.AccessController.Live.* -Recurse
	Remove-Item Markel.REMUS.Datapacks.BrokerRepository.Live.* -Recurse
}

function UpdateConnectionString($configFile, $connectionString) {
	$xml = [xml](Get-Content $configFile)
	$node = $xml.SelectSingleNode("//configuration/connectionStrings/add[@name='ConnectionString']")
	$node.SetAttribute("connectionString", $connectionString)
	$xml.Save($configFile)
}


function GetEnvironment($configFile)
{
	$appConfig = New-Object XML
	$appConfig.Load($configFile)	
	foreach($setting in $appConfig.configuration.appSettings.add) {
		if ($setting.key -eq "OctopusEnvironment") {
			return $setting.value	
		}
	}
	throw "app key  string OctopusEnvironment not found in $configFile"
}
