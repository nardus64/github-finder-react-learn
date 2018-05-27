"use strict";
// need to add the php to access the database
//document.getElementById('reqest1').addEventListener('click',loadDoc(lon,lat))
function loadDoc(lon,lat){
	lon.preventDefault();
	 lat.preventDefault();	
	 if (lat == "") {
        document.getElementById("grafData").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            var xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
       // xmlhttp.onreadystatechange = function() {
        //    if (this.readyState == 4 && this.status == 200) {
         //   	
        // xmlhttp.open("POST","graffitigetajax.php?q="+str,true);
         xmlhttp.open("POST","graffitigetajax.php",true);
         xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
         xmlhttp.onload = function(){
         		if(this.status == 200){
         			console.log(this.responseText);
                 document.getElementById("txtHint").innerHTML = this.responseText;

               // document.getElementById("txtHint").innerHTML = 'arived here';
         }
            }
            xmlhttp.onerror = function(){
          		document.getElementById("txtHint").innerHTML = 'Did not connect to database ';  	
            }
        };
        var  str = lat+','+lon;
        //xmlhttp.open("POST","graffitigetajax.php?q="+str,true);
        xmlhttp.send(str);
    }
}