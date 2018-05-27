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
	//var mytotal = 0.0;
	var myresult = " ";
	// get the day number
	var d = new Date();
	var c = d.getMonth();
	c++;
	var z = new Date();
	var e = d.toDateString();
	var f = e.substr(11,4);
	var g = f + "-" + c;
	var loclan = "0";
	var loclat = "0";
	var vars = "latitude=" + loclat + "&longitude=" + loclon;
	//get the current location or display all the graffiti if unable to getthe location
	getLocation();
	alert("after get loclan");
	// access the  database using ajax and php from javascript
	//if the location was received if ( location == " ") {
	//	  document.getElementById("txtHint").innerHTML = "";
    //    return;
    //		} 
    // else {	
	// setup the http object
	if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    xmlhttp.open("GET","graffitiGet.php?q="+loclon,true);  
        // set content type header information for sending url encodes variables
        // this execute with the xmlhttp.send() at the bottom
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //access the onreadystatechange event for the XMLHttpRequest object
    xmlhttp.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                var return_data = this.responseText;      
                document.getElementById("showMessage").innerHTML = return_data;
            }
        }  
        //send the variables to php THIs execute the above code
    xmlhttp.send();
    document.getElementById("demo").innerHTML = "....processing...>>>";
    alert("after send");
        
 }
	/*
	listArry.sort();
	for (var i = 0, n = listArry.length; i < n; i++){		
		  	var z = new Date();
	  	  	var y = value.substr(0,4);
		  	var m = value.substr(5,2);
		  	m--; // subtract 1 from the month as january value in date = 0 etc
		  	var dag = myresult.substr(7,2);
		  	z.setFullYear( y , m , dag);
		  	var tt = value.split(",",2);			
		  	var tt1 = tt.slice(1,4);
		  	var ttt = parseFloat(tt1); // parse tt1 into a float point ttt		  	
		  	mytotal = mytotal + ttt;
		  	var listy = listArry[i];
			document.getElementById("lextxtarea").value += listy;
			
	}
	document.getElementById("total").value = mytotal.toFixed(2);
} */	   

function getLocation() 
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        loclat = "12345"; loclan = "54321";
    }
        //	if(loclat == " "){loclat = "12345"; loclan = "54321";};
     
}
// use global variables loclon and loclat
function showPosition(position) {
	loclat = position.coords.latitude
	loclon = position.coords.longitude
	
	alert (loclon + " " + loclat);
	document.getElementById("lat1").innerHTML = loclat;
    document.getElementById("lon1").innerHTML = loclon;
  /*  x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=16&size=400x150&sensor=false";
   
   document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
   */
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