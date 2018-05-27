<!DOCTYPE html>
<html  lang="en">
<meta charset="utf-8"> 
<body>
</body>
</html>
<?php

	$g_message 	=  test_input($_POST['notestext']);
	$g_name 	= test_input($_POST['locname']);
	$g_long 	= test_input($_POST['graflo']);
	$g_lat 		= test_input($_POST['grafla']);
	//$long = testLatLon($g_long);
	//$lat = testLatLon($g_lat);
	echo "<table  class='w3-table-all w3-hoverable w3-xlarge'>
	<tr>
	<th>Long</th>
	<th>Lat</th>
	<th>name</th>
	</tr>";
    
    echo "<tr>";
    echo "<td>" . $g_long . "</td>";
    echo "<td>" . $g_lat . "</td>";
    echo "<td>" . $g_name . "</td>";
    echo "</tr>";	
     //   echo "Graffiti: " . $row["grffiti"]. "<br>";
    //    document.getElementById("lextxtarea").value("found some graffiti here.");
        
	echo "</table>";	

$username 	= "mydb1620";
$password 	= "Mydb_16_20";
$dbname 	= "mydb16";
$usertable	= "grafi1";
$userfield	= "id";
$servername = "localhost"


?>
<br>
<br>
<input type="button" VALUE="Value Added, Press here to return" onClick="history.go(-1);return true;" class="w3-xxlarge">
<?php
function test_input($data) {
 $data = trim($data);
 $data = stripslashes($data);
 $data = htmlspecialchars($data);
 return $data;
}
?>
