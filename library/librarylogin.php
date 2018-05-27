<?php
session_start();

$dbServername = "localhost";
$dbUsername = "mydb1620";
$dbPassword="Mydb_16_20";
$dbName = "mydb16";

if (isset($_POST['submit'])){

        $con = new mysqli_connect("localhost","mydb1620","Mydb_16_20","mydb16") or die ("unable to connect");
            // Check connection
           // if ($con->connect_error){        
            //die("Connection failed: " . $con->connect_error); }

        $g_userid   = $mysqli->escape_string($_POST['uname']);
        $g_passw    = $mysqli->escape_string($_POST['psw']);   
         $sql = "SELECT booklogid, booklogname, booklogpass FROM booklog where booklogname = $g_userid";

         $result = $con->query($sql);
         

        if ($result->num_rows > 0) {
            if (booklogname = $g_userid and booklogpass = g_passw)
                { 
                    echo "login successfull";
                    $_SESSION["usercode"] = booklogid;

                }
                
        } else {
            echo "user not found, please retry.";
        }
} else
{header("Location: libraryhdr.html");
    exit();
    }



$con->close();



function addencrypt($aresult1){
    return $aresult1;
    }

function comparecrypt($aresult1){
    return $aresult1;
    } 

function test_input($data) {
 $data = trim($data);
 $data = stripslashes($data);
 $data = htmlspecialchars($data);
 return $data;
}
?>