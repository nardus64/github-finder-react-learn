<!DOCTYPE html>
<html  lang="en">
<meta charset="utf-8"> 
<title> Message plant app.</title>
<body>
<?php

$con = new mysqli_connect("localhost","Xmess","Xciscoip64","xmess");
//if do not connect
if (mysqli_connect_errno())
{
	echo "failed to xconnect" . mysqli_connect_error();
}
//if we connect
if(mysqli_ping($con))
{
	$sql = "INSERT INTO xmessage (xmesDate, xmesHourDay, xmesLacatname, xmesMesssage, xmesSeq,
	xmesTtl, xmesXRvector, xmesYRvector)
	VALUES (20161016,'D',
	'test','Hello',1,1,'11:22:33:44','55:66:77')"

	$insert = $mysqli->query($sql);
		if ($insert){echo " Successsss!";}
		else {
		die("Error: {$mysqli->errno} : {$mysqli->error}");
		}
		}
else 
{
	echo " error : " . mysqli_error($con);
}	
mysqli_close($con);

?>
</body>
</html>