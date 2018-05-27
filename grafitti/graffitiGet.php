<!DOCTYPE=html>
<title> xercise </title>
<head></head>
<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0"encoding="UTF-8" standalone="yes" ?>';
$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	= "grafi1";
$userfield	= "id";
$q = intval($_GET['q']);
$longt = $q;
$con = mysqli_connect('localhost',$username,$password,$dbname);
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM grafi1 WHERE grffitiLong >= longt";
$result = mysqli_query($con,$sql);
echo $result;
mysqli_close($con);
?>
