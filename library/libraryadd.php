<?php
session_start();
?>
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
	$g_book 	= test_input($_POST['bookName']);
	$g_author 	= test_input($_POST['authorname']);
	$g_rating 	= test_input($_POST['ratingname']);
	$g_descript = test_input($_POST['descripname']);
	$g_date     = test_input($_POST['datename']);

$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	= "book1";
$userfield	= "id";
$servername = "localhost";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else
{
	$g_book 	= test_input($_POST['bookName']);
	$g_author 	= test_input($_POST['authorname']);
	$g_rating 	= test_input($_POST['ratingname']);
	$g_descript = test_input($_POST['descripname']);
	$g_date     = test_input($_POST['datename']);	
	//get the session userid
	$g_userid 	= $_SESSION['bookid'];
	
	//test if the $g_userid not received test wth my id 123456
	if ($g_userid == " "){
		$g_userid = 12345;
	}

	if ($g_userid > " "){
	$sql = "INSERT INTO book1 (bookuserid, bookname, bookauthor, bookrating, bookdescription, bookdate, bookread)
	VALUES ('$g_userid', '$g_book', '$g_author', '$g_rating', '$g_descript', '$g_date','Y')";

		if ($conn->query($sql) === TRUE) {
	    echo "<h2>".$g_book."</h2>";
	    echo "<h2> New book insert: successfull</h2>";
    //return;
	} else 
		{
	    echo "New book insert: Error: " . $sql . "<br>" . $conn->error;
		}
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
