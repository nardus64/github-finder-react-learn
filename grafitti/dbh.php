<!DOCTYPE html>
<html lang="en">
<title> Graffiti </title>
<body>
</body>
<?php
$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	= "grafi1";
$userfield	= "id";
$conn = mysqli_connect("localhost", "$username", "$password", "$dbname");
if (!$conn){
	die("connectio failed: ".mysqli_connect_error());
}