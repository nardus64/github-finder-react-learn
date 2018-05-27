<form action="getplantMsg.html" method="get" type="button" style="cursor:pointer">


function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    x.innerHTML = latlon;

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