<!DOCTYPE html>
<html  lang="en">
<meta charset="utf-8"> 
<head>
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3mobile.css">
</head>
<body>
</body>
</html>
<?php
	$g_userid	= test_input($POST['userid']);
	$g_book 	= test_input($_POST['bookNameidtd']);
	$g_author 	= test_input($_POST['authoridtd']);
	$g_rating 	= test_input($_POST['ratingidtd']);
	$g_descript = test_input($_POST['descriptidtd']);
	$g_date     = test_input($_POST['dateidtd']);

$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	= "books1";
$userfield	= "id";
$servername = "localhost";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else
{ 	$g_userid	= test_input($POST['userid']);
	$g_book 	= test_input($_POST['bookNameidtd']);
	$g_author 	= test_input($_POST['authoridtd']);
	$g_rating 	= test_input($_POST['ratingidtd']);
	$g_descript = test_input($_POST['descriptidtd']);
	$g_date     = test_input($_POST['dateidtd']);
$sql = "INSERT INTO books1 (bookuserid, bookname, bookauthor, bookrating, bookdescr)
VALUES ('$g_userid', '$g_book', '$g_author', '$g_rating', '$g_descript', '$g_date')";

	if ($conn->query($sql) === TRUE) {
    echo "New book insert; successfull";
    //return;
	} else {
    echo "New book insert: Error: " . $sql . "<br>" . $conn->error;
	}
}
$conn->close();


?>
<br>
<br>
<input type="button" VALUE="Return here" onClick="history.go(-1);return true;" class="w3-jumbo  ">
<?php
function test_input($data) {
 $data = trim($data);
 $data = stripslashes($data);
 $data = htmlspecialchars($data);
 return $data;
}
?>
