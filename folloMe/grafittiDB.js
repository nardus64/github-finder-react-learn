"use  strict";
var x = document.getElementById("demo");

function getGeoLocation()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);	
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    document.getElementById("demo").value = " ";
}

/*function showPosition(position) {
	var latlon = position.coords.latitude + "," + position.coords.longitude;
	document.getElementById("lextxtarea").innerHTML = latlon;
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=16&size=400x150&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}
*/
	
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
    alert (latlon);
	var Numf = document.getElementById("lexnum").value;
	var lexdate = Date.now();
	document.getElementById("demo").innerHTML = lexdate;
	var Datf = document.getElementById("lexdate").value;
	var textf = document.getElementById("emailAd").value;
	// clear old values
	

	/*if (mailadd != " " && textf != " "){
	*/
	var n = "graffiti" + (localStorage.length + 1);
	var myresult =  Datf + ", "  +  ", " + latlon;
	localStorage.setItem(n,myresult);
	document.getElementById("lextxtarea").value += myresult;
	cleanfields();
/*	}
	else
	{
		alert("Please enter values. message could not be send");
	}*/
}

function getLocation(txtElement) {
    var x = document.getElementById("demo1");
    document.getElementById("submit1").disabled = false;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        document.getElementById("submit1").disabled = false;
        document.getElementById("txtName").disabled = false;
        document.getElementById("lextxtarea").disabled = false;
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    var y = document.getElementById("demo");
    y.innerHTML = " ";
    txtElement.value=maplon;
}

function showPosition(position) {
    var x = document.getElementById("demo1");
    maplon = position.coords.longitude;
    maplat = position.coords.latitude ;

    document.getElementById("graflat").value = maplat;
    document.getElementById("graflong").value = maplon;
    
    x.innerHTML = " Location marked";

 
    /*  var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=16&size=200x150&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";*/
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