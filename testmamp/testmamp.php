<!DOCTYPE html>
<html>
<title>Test connection to mamp</title>
<body>
	<h2>this test if I can connect to the mamp package locally</h2><br>
	<h4>using mysql</h4>
<h4>$con=mysql_connect('localhost','root','root','mydb16');</h4>

<?php
$o = $_POST["lon1"];
echo $o;
$con=mysql_connect('localhost', 'root', 'root', 'mydb16');
// Check connection
if ($con->connect_error){
	die("Connection failed: " . $conn->connect_error);
}
?>
<h4>after the connect</h4>
<?php
$sql = "SELECT grffiti FROM grafi1 WHERE grffitiLong >= '$o'";
$result = $con->query($sql);
//mysqli_query($con,$sql);
//$row=mysqli_fetch_assoc($result);
//if(!$row = $results->fetch_assoc())
if($result->num_rows < 1)
{ 
echo "no Graffiti found";
	
}
else{
    while($row = $result->fetch_assoc()) {
        echo "Graffiti: " . $row["grffiti"]. "<br>";
        
}}
$con->close();
$_SESSION['id'] = $row['id'];
exit(0);
?>
</body>
</html>