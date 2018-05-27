<!DOCTYPE html>
<html  lang="en">
<meta charset="utf-8"> 
<body>
</body>
</html>
<?php
$g_latitude = $g_longtitude =  $g_message = $g_name  = " "; 
$servername = "localhost";
$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	= "graffiti";
$userfield	= "g_id";

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

	$g_message 	= $_POST['notestext'];
	$g_name 	= $_POST['locname'];
	$sql = "INSERT INTO graffiti (graffiti, location_name, map_long, map_lat) VALUES ('test', 'no1', '1234', '54321')";
	if(!mysqli_query($conn,$sql))
	{
		#"echo (" record not inserted: " . mysqli_error($conn));
		"<html><script language='Javascript'>alert('unsuccessfull insert, please try again later'),history.go(-1)</script></html>";
	}
	else
	{
		#echo "Record Inserted";
		echo '<script type="text/javascript">
		document.location= "http://xpens.co.uk/graffitiPutDB.html"
		</script>
		'; 
	}
//}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}	
?>
