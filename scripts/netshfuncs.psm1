function Test-URLReservationExists($url) {
  $netsh_output = netsh http show urlacl url=$url | Select-String -SimpleMatch 'Reserved'
  return ($netsh_output -ne $null)
}

function Set-URLReservation($url) {
  if ( -not (Test-URLReservationExists $url)) {
	netsh http add urlacl url=$url user=Everyone
  }
}