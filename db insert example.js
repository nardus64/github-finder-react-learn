create tablein godaddy:
	 use myisam storage engin.
	 useutf8-general-ci  collation


$con=mysqli_connect('localhost','mydb1620','Mydb_16_20') or die( "<html><script language='Javascript'>alert('Unable to connect to database, please try again later'),history.go(-1)</script></html>" );
if (!$con)
{
	echo "not connected to server";
}
else
{
	echo " Connected to the server ";
}
if (!mysqli_select_db($con,"mydb16"))
{
	echo(" Not connected to database!!!! ");

}
else
{
	echo (" Connected to the db!S ");
}

$sql="insert into mytest (code, message) values ('a1234', 'testing message')";
$query=mysqli_query($con,$sql);
if($query)
	{echo 'data inserted! ';}
else
{
	echo " Not inserted: ".mysqli_error($con);
}
echo "end";
"<html><script language='Javascript'>history.go(-1)</script></html>"
mysqli_close($con);
