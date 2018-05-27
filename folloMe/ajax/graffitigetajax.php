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
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css"> 
<style>
html, body, h1, h2, h3, h4, h5, h6 {
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers|Finger+Paint|Freckle+Face|Luckiest+Guy|Rubik+Mono+One" rel="stylesheet">
<style>
.w3-tangerine {
    font-family: "Tangerine", serif;
}
.w3-finger {font-family: 'Finger Paint', cursive;}
.w3-bang {font-family: 'Bangers', cursive;}
.w3-luck {font-family: 'Luckiest Guy', cursive;}
.w3-freckl {font-family: 'Freckle Face', cursive;}
.w3-rubik {font-family: 'Rubik Mono One', sans-serif;}
</style>
<body>
<div class="w3-container w3-finger">
<h1  class = "w3-jumbo w3-card w3-teal"> Read graffiti </h1> 

<?php
header("Access-Control-Allow-Origin: *"); // supose to allow cross origin
if (isset($_POST['graflo']) === true 
    && empty($_POST['graflo']) === false
    && isset($_POST['graflo']) === true
    && empty($_POST['graflo']) === false)
{
    $o = test_input((float)$_POST["graflo"]);
    $a = test_input((float)$_POST["grafla"]);
    // mysql_real_escape_string(trim($_POST['graflo']))
    // mysql_real_escape_string(trim($_POST['grafla']))
    if ($a == 0 ){ 
        echo "Your location is not avalable at the moment";}
    else{
        $west = $o - 0.001;
        $east = $o + 0.001;
        $north = $a + 0.0015;
        $south = $a - 0.0015;
        //$con=mysqli_connect("localhost","mydb1620","Mydb_16_20","mydb16");
        require '../connect/connect.php';
        // Check connection
        //if ($con->connect_error){
    	//die("Connection failed: " . $conn->connect_error);
        ////}
    $sql = mysqli_query("SELECT grffiti, id, grffitiLong FROM grafi1 
    WHERE   (grffitiLong >= '$north' and grffitiLong <= '$south')
    and     (grffitiLat >= '$west'   and grffitiLat  <= '$east')
    ");
    echo (mysqli_num_rows($sql) !== 0) ? mysqli_result($sql, 0, 'grffitiLong') : "No Graffiti found here. Add graffiti.";
    //$result = $con->query($sql);
    //if($result->num_rows < 1)
    //{ 
    //echo "No Graffiti found here. Add graffiti.";	
    //}
    //else{
    //	echo "<table  class='w3-table-all w3-hoverable w3-xlarge'>
    //	<tr>
    //	<th>Graffiti</th>
    //	</tr>";
    //  while($row = $result->fetch_assoc()) {
    //    echo "<tr>";
    //    echo "<td>" . $row['grffiti'] . "</td>";
    //    echo "</tr>";	
         //   echo "Graffiti: " . $row["grffiti"]. "<br>";
        //    document.getElementById("lextxtarea").value("found some graffiti here.");
    //        
    //	}
    //	echo "</table>";
    //}
    $con->close();
    }
}
?>
<center>
<br>
<br>
<input type="button" VALUE="Exit" onClick="history.go(-1);return true;" class="w3-jumbo">
</center>
<php
$_SESSION['id'] = $row['id'];
?>
</div>
<?php
function test_input($data) {
 $data = trim($data);
 $data = stripslashes($data);
 $data = htmlspecialchars($data);
 return $data;
}
?>
</body>
</html>