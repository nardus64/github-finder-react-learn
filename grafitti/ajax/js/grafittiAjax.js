"use strict";
// need to add the php to access the database
function loadDoc(lon,lat){	
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
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        var  str = lat+','+lon;
        xmlhttp.open("POST","graffitigetajax.php?q="+str,true);
        xmlhttp.send();
    }
}