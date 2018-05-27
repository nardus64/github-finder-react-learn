<?php
 mysqli_connect("localhost","mydb1620","Mydb_16_20","mydb16");
    // Check connection
    if ($con->connect_error){
	die("Connection failed: " . $conn->connect_error);
    }
    mysqli_select_db('mydb16');
?>