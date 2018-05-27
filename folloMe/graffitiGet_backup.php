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
<body>

<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0"encoding="UTF-8" standalone="yes" ?>';
$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	= "grafi1";
$userfield	= "id";
$q = intval($_GET['q']);
$longt = '. $_POST['longitude'].';
$con = mysqli_connect('localhost',$username,$password,$dbname);
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM grafi1 WHERE grffitiLong >= longt";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Longitude</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['longitude'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>