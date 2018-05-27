<!DOCTYPE html>
<html  lang="en">
<meta charset="utf-8"> 
<body>
<?php
$servername = "localhost";
$username = "Xmess";
$password = "Xmess2016";
$dbname = "xmsg";
$usertable="xmessages";
$userfield="xmsgcode";
// Create connection
$conn = mysqli_connect($servername, $username, $password) or die ("<html><script language='Javascript'>alert('Unable to connect to database, please try again later'),history.go(-1)</script></html>");
// Check connection
if (!$conn)
{
	echo "not connected to server";
}
else
{
	echo "connected to the server ";
}
if (!mysqli_select_db($conn,'xmsg'))
{
	echo("not connected to database ");

}
$mail = $_POST['mail'];
$message = $_POST['notestext'];
$name = $_POST['locname'];
$xmscode = 123534;
$sql  = "INSERT INTO xmessage (xmsgcode, xmsgLocName, xmsgMessage) VALUES ('$xmscode', '$name', '$message')";
if(!mysqli_query($con,$sql))
{
	echo "not inserted";
}
else
{
	echo "Inserted";
}
$query = "SELECT count(*)  FROM $usertable";
echo "$query";

header("refresh:3; url=plantMsgDB.html")

#if(mysqli_ping($con))
#if($result)
#{
#	while($row = mysql_fetch_array($result))
#	{
#		$name = $row["$userfield"];
#		echo "message: ".$name."<br/>";
#	}
#	$sql = "INSERT INTO xmessage (xmesDate, xmesHourDay, xmesLocatname, xmesMesssage, xmesSeq,
#	xmesTtl, xmesXRvector, xmesYRvector)
#	VALUES (20161016,'D',
#	'test','Hello',1,1,'11:22:33:44','55:66:77')"
#
#	$insert = $mysqli->query($sql);
#		if ($insert){echo " Successsss!";}
#		else {
#		die("Error: {$mysqli->errno} : {$mysqli->error}");
#		}
#		}
?>
</body>