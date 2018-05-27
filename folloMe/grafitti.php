<!DOCTYPE html>
<html  lang="en">
<meta charset="utf-8"> 
<head>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3mobile.css">
</head>
<style>
.butty1{
	text-align: center;
	}

</style>
<body>
</body>
</html>
<?php

	$g_message 	=  test_input($_POST['notestext']);
	$g_name 	= test_input($_POST['locname']);
	$g_long 	= test_input($_POST['graflo']);
	$g_lat 		= test_input($_POST['grafla']);

$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	= "grafi1";
$userfield	= "id";
$servername = "localhost";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else
{ 
$g_message 	=  test_input($_POST['notestext']);
	$g_name 	= test_input($_POST['locname']);
	$g_long 	= test_input($_POST['graflo']);
	$g_lat 		= test_input($_POST['grafla']);
$sql = "INSERT INTO grafi1 (grffiti, grffitiLat, grffitiLong, grffitiName)
VALUES ('$g_message', '$g_lat', '$g_long', '$g_name')";

	if ($conn->query($sql) === TRUE) {
		echo '<!DOCTYPE html>"
		 "<html>"
		 "<body>"
				"<div>"
				"<center>"
				 "<p>"
				"<h1 center>New record created successful</h1>"
				"</p>"
				"</div>"
			"</body>"
		"</html>"';	
	} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
$conn->close();


?>
<br>
<br>
<input  type="button" VALUE="Return here" onClick="history.go(-1);return true;" class="butty1 w3-jumbo">
<?php
function test_input($data) {
 $data = trim($data);
 $data = stripslashes($data);
 $data = htmlspecialchars($data);
 return $data;
}
?>
