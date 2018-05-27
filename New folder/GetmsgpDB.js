"use  strict";
var x = document.getElementById("demo");

function getGeoLocation()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);	
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
	var latlon = position.coords.latitude + "," + position.coords.longitude;
	document.getElementById("lextxtarea").innerHTML = latlon;
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=16&size=400x150&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
	
function listLocation()
{
	document.getElementById("lextxtarea").innerHTML = "testlistlocation";
}
function nameLocation()
{
	document.getElementById("lextxtarea").innerHTML = "test lextextarea";
}
// SAVE the values to localstorage, call functions to pop the text area //and  clearing fields for next input	 
function saveLoc(){
	var mailadd = document.getElementById("emailAd")
	//var Numf = document.getElementById("lexnum").value;
	var lexdate = Date.now();
	//document.getElementById("demo").innerHTML = lexdate;
	//var Datf = document.getElementById("lexdate").value;
	//var textf = document.getElementById("emailAd").value;
	// clear old values
	

	/*if (mailadd != " " && textf != " "){
	*/
	var n = "msgplant" + (localStorage.length + 1);
	var myresult = lexdate +  ", " + mailadd + " ,";
	localStorage.setItem(n,myresult);
	//document.getElementById("lextxtarea").value += myresult;
	//cleanfields();
/*	}
	else
	{
		alert("Please enter values. message could not be send");
	}*/
}
function Getsecret()
{
	alert ("start getsecret");
	var phoneNear = "N";
	SaveNewCode();
	getGeoLocation();
	
	alert ("after get location");
	//get the message location to verify if location is nearcy
	//read the DB
	//var MessLoc = new connection
	// find the secret code on db
	//use the location detail to determine
		//if the locATION IS REACHED
		//IF PHONE IS NEAR THE LOCATION.
	if (phoneNear = 'Y')
	{
		document.getElementById("showMessage").value = " this is a test message, message near ";
	}	
	if (phoneNear = 'N')
	{
		document.getElementById("showMessage").value = " this is a test message, message far away!! ";
	}
}

function SaveNewCode(){
	var codeadd = document.getElementById("codeAd")
	var lexdate = Date.now();
	document.getElementById("demo").innerHTML = lexdate;
	var textf = document.getElementById("codeAd").value;
    var n = "msgcode" + (localStorage.length + 1);
	var myresult = lexdate + ", " + codeadd
	localStorage.setItem(n,myresult);
	
}