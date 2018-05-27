<!DOCTYPE html>
<html  lang="en">
<meta charset="utf-8"> 
<body>
</body>
</html>
<?php
// require_once "Mail.php";
$servername = "localhost";
$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	= "mytest";
$userfield	= "code";
// Create connection
$conn = mysqli_connect($servername, $username, $password) or die ("<html><script language='Javascript'>alert('Unable to connect to server, please try again later'),history.go(-1)</script></html>");
// Check connection
if (!$conn)
{
	echo "not connected to server";
}

if (!mysqli_select_db($conn,$dbname))
{
	echo("not connected to database, ").mysql_error($conn);
}
$mail = $_POST['mail'];
$Message = $_POST['notestext'];
$name = $_POST['locname'];
$code = 'B123534';
$email = 'mail';
$sql  = "INSERT INTO $usertable (code, message) VALUES ('$code', '$Message')";
if(!mysqli_query($conn,$sql))
{
	#"echo (" record not inserted: " . mysqli_error($conn));
	"<html><script language='Javascript'>alert('unsuccessfull insert, please try again later'),history.go(-1)</script></html>";
}
else
{
	#echo "Record Inserted";
	echo '<script type="text/javascript">
	document.location= "http://xpens.co.uk/plantMsgDB.html"
	</script>
	'; 
}
// the message
/*$msg = "You received a coded messsage \n Please go to www.xpens.co.uk/getPlantMsg.html to find it.";
$msg = $msg + "Your secret Code is :" + $code;
echo $msg;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail($email,"My subject",$msg);
*/
#"<html><script language='Javascript'>alert('successfull insert.'),history.go(-1)</script></html>";
#$query = "SELECT count(*)  FROM $usertable";
#echo "$query";

#header("refresh:3; url=plantMsgDB.html")

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
