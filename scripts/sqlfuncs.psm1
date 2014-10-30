function Get-DbConnectionBuilder($configFile, $connectionName) {	
	$appConfig = New-Object XML
	$appConfig.Load($configFile)	
	foreach($setting in $appConfig.configuration.connectionStrings.add) {
		if ($setting.name -eq $connectionName) {
			$connectionString =  $setting.connectionString 
			$sb = New-Object System.Data.Common.DbConnectionStringBuilder
			$sb.set_ConnectionString($connectionString)
			return $sb
		} else {
			throw "sql connection string `"$connectionName`" not found in `"$configFile`""
		}
	}
}

function Apply-DbDeploy($instanceName, $dbName, $scriptDir){	
	
	$runner = @(Get-ChildItem . -recurse -include dbdeploy.exe)
	$dbDeployCmdLine = "& `"$runner`" --connectionstring=`"Server=$instanceName;Database=$dbName;Integrated Security=SSPI`"  --scriptdirectory=`"$scriptDir`"  --delimiter='GO' "
	echo $dbDeployCmdLine
	& { iex $dbDeployCmdLine } 2>&1
	if ($lastexitcode -ne 0 ) {
		throw "Exec: Build Failed - dbdeploy"
	}

}

