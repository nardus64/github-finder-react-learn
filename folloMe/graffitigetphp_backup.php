<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css"> 
<body>
<?php
$o = $_POST["lon1"];
echo "$o";
$con=mysqli_connect("localhost","mydb1620","Mydb_16_20","mydb16");
// Check connection
if ($con->connect_error){
	die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT grffiti, id, grffitiLong FROM grafi1 WHERE grffitiLong >= '$o'";
$result = $con->query($sql);
if($result->num_rows < 1)
{ 
echo "no Graffiti found";
	
}
else{
	echo "<table  class='w3-table-all w3-hoverable w3-xlarge'>
	<tr>
	<th>Gaffiti</th>
	<th>id</th>
	<th>longitude</th>
	</tr>";
    while($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $row['grffiti'] . "</td>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['grffitiLong'] . "</td>";
    echo "</tr>";	
     //   echo "Graffiti: " . $row["grffiti"]. "<br>";
    //    document.getElementById("lextxtarea").value("found some graffiti here.");
        
	}
	echo "</table>";
}
$con->close();
?>
<input type="button" VALUE="Exit" onClick="history.go(-1);return true;" class="w3-xxlarge">
<php
$_SESSION['id'] = $row['id'];
?>
</body>
</html>