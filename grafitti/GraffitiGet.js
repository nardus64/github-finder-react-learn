"use  strict";
var x = document.getElementById("demo");
var loclon = " ";
var loclat = " ";
 function init() {		 
         // This function is called after the page is loaded
		 // populate textarea
		// poparray1();
			//populate the array to sort
		 		
		var a = 1;
		var bad = 0;
	 
       }

function poparray1(){
	var listArry = [];	
	var myresult = " ";
	var loclan = "0";
	var loclat = "0";
	//get the current location or display all the graffiti if unable to getthe location
	getLocation();
	//alert("after get loclan");
	// access the  database using ajax and php from javascript
	//if the location was received if ( location == " ") {
	//	  document.getElementById("txtHint").innerHTML = "";
    //    return;
    //		} 
    // else {
    //jquery
    //Basic syntax is: $(selector).action()
    //All selectors in jQuery start with the dollar sign and parentheses: $().
    // element selectors: html  <p>	  jquery select $("p")
    // #id selector:  uses the id attribute of an HTML tag to find the specific element.$(#test)
	//The jQuery class selector finds elements with a specific class $(".test")
	// setup the http object 
	//test if page was loaded , can also use $(function(){});
	//$(document).ready(function()
	//{
	//var xmlhttp = new XMLHttpRequest();

    document.getElementById("mapholder").innerHTML = "....processing...>>>";
    
     //}
     //);   
 }   

function getLocation() 
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";      
    }     
}
// use global variables loclon and loclat
function showPosition(position) {
	loclat = position.coords.latitude
	loclon = position.coords.longitude
	
	
	document.getElementById("lat1").innerHTML = loclat;
    document.getElementById("lat1").innerHTML = loclon;
    document.getElementById("graflat").value = loclat;
    document.getElementById("graflong").value = loclon;

    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=16&size=400x150&sensor=false";
   
   document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  /* */
}
//
//
//
// use local storage for something, not yet used in graffiti
function Getsecret()
{
	//alert ("start getsecret");
	var phoneNear = "N";
	//SaveNewCode();
	getGeoLocation();
	//use the location detail to determine
		//if a graffiti message was created in facinity
		//IF PHONE IS NEAR THE LOCATION. list all the message names.
	poparray1();
	/*if (phoneNear = 'Y')
	{
		document.getElementById("showMessage").value = " this is a test message, message near ";
	}	
	if (phoneNear = 'N') 
	{
		document.getElementById("showMessage").value = " this is a test message, message is still far away!! ";
	}*/
}
/*
function SaveNewCode(){
	var codeadd = document.getElementById("codeAd")
	var lexdate = Date.now();
	document.getElementById("demo").innerHTML = lexdate;
	var textf = document.getElementById("codeAd").value;
    var n = "msgcode" + (localStorage.length + 1);
	var myresult = lexdate + ", " + codeadd
	localStorage.setItem(n,myresult);
	
}*/
function loadDoc(lon,lat){	
	 if (lat == "") {
        document.getElementById("grafData").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
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