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
<h1  class = "w3-jumbo w3-card w3-teal"> My Books Read </h1> 
<?php  
    //echo "<h2> here </h2>";
    $con= new mysqli("localhost","mydb1620","Mydb_16_20","mydb16");
    // Check connection
    if ($con->connect_error){
        echo "<h2> hier after here</h2>";
	die("Connection failed: " . $con->connect_error);
    }

 $sql = "SELECT seq, bookuserid, bookname, bookauthor, bookrating, bookdescription FROM book1 LIMIT 0, 30 ";

 $result = $con->query($sql);
 
 //addtoarray("in function");

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       // echo "Name: " . $row['bookname']. " - Author: " . $row['bookauthor']. " - Rating: " . $row['bookrating']. "<br>";
        addtoarray($row['bookname'],$row['bookname'],$row['bookname']);
    }
} else {
    echo "0 results";
}


$con->close();

function addtoarray($aresult1, $result2, $result3){
    echo"<h3>Bookname".$aresult1."</h3>"."<h2>Author:".$result2."</h2>"."<h2>\Rating:".$result3."</h2>";
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