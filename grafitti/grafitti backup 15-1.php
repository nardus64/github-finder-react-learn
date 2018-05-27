<!DOCTYPE html>
<html  lang="en">
<meta charset="utf-8"> 
<body>
</body>
</html>
<?php
$g_latitude = $g_longtitude =  $g_message = $g_name  = " "; 
//if ($_SERVER["REQUEST_METHOD"] == "POST") {
$servername = "localhost";
$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	="graffiti";
$userfield	="g_id";

$g_longtitude = test_input($_POST['graf_lo']);

$g_latitude   = test_input($_POST['graf_la']);

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
//if ($g_longtitude == " " || $g_latitude == " "){
//	echo("This spot is not selected, Please use the 'Mark this spot Button'.");
//}

//else{
//	$g_message 	= test_input($_POST['notestext']);
//	$g_name 	= test_input($_POST['locname']);
//	$sql  = "INSERT INTO $usertable (graffiti, location_name, map_long, map_lat) VALUES ('$g_message', '$g_name', //'$g_longtitude', '$g_latitude')";
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
