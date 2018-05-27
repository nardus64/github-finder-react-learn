php security:

avoid hackers inserrting code 
USE hltmlentities in the get and post, this change the  open brackets into &lt and &gt signs in tthe script.
eg
<?php 
if(isset($_POST['name'])){
	//print_r($_GET);
$naam = htmlentities($_POST['email']);
echo $naam;
}
?>
