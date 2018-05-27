"use strict";
//onLoad = myFunctionrandom();// return true;

//new 1/11
   var button = document.getElementById('myButton');
   // Define a click listener on the button
   //button.addEventListener('click', processClick);
  

   // 1/11
function myImg1() {
	img1.src(explode.jpg);
}

/*//sort local storagge and send to an email address
function sendLocalStorageByEmail(recipient) {
    var output = '',
        arr = [],
        anchor = document.createElement("a");

    for (key in localStorage) {
        if (localStorage.hasOwnProperty(key) && !isNaN(key)) {
            arr.push(key);
        }
    }

    arr.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    for (var i=0; i<arr.length; i++) {
        output += arr[i] + "\n" + localStorage[arr[i]] + "\n\n";
    }

    anchor.href = "mailto:" + recipient + "?subject=Names for tonight&body=" + encodeURIComponent(output);
    anchor.style.display = "none";
    anchor.setAttribute("target", "_blank");
    anchor.appendChild(document.createTextNode(""));
    document.body.appendChild(anchor);

    if (anchor.click) {
        return anchor.click();
    }
}​*/  

 function init() {		 
         // This function is called after the page is loaded
		 // populate textarea
		 poptextarea();
			 				
		var a = 1;
		var bad = 0;
	 
       }
// add all the values in the localstorage to the textarea.
//d.toDateString();
	function poptextarea(){
	var mytotal = 0.0;
	var myresult = " ";
	// get the day number
	var d = new Date();
	var c = d.getMonth();
	c++;
	var e = d.toDateString();
	var f = e.substr(11,4);
	var g = f + "-" + c;		
	for (var i = 0, n = localStorage.length; i < n; i++){
        var key = localStorage.key(i);
        var value = localStorage[key];
		var varkey = key.slice(0,7);
		if (varkey == "expense"){
			myresult = value;
			var z = new Date();
			var y = myresult.substr(0,4);
			var m = myresult.substr(5,2);
			m--; // subtract 1 from the month as january value in date = 0 etc
			var dag = myresult.substr(8,2);
			z.setFullYear( y , m , dag);
			var tt = myresult.split(",",2);			
			var tt1 = tt.slice(1,4);
			//var ttt = parseInt(tt1); // parse tt1 into a integer ttt		(only the integer not the pence)
			var ttt = parseFloat(tt1); // parse tt1 into a float point ttt
			var rad1 = document.getElementById("lexdate");
			rad1.checked = true;
				if (varkey == "expense")
				{				 
				mytotal = mytotal + ttt;
				};
			}
		}
		document.getElementById("total").value = mytotal.toFixed(2);
}	
	//}	   
		
// SAVE the values to localstorage, call functions to pop the text area //and  clearing fields for next input	 
function saveme(){
	var Numf = document.getElementById("lexnum").value;
	var Datf = document.getElementById("lexdate").value;
	var textf = document.getElementById("lextext").value;
	var str1 = Datf.slice(0,4);
	var str2 = Datf.slice(5,7);
	var str3 = Datf.slice(8,10);
	var str4 = str1 + str2 + str3;
	if (document.getElementById("lexSign").checked){
		Numf = Numf * -1;
	}
	if (Numf != 0 && lexdate != " "){
		var n = "expense" + (localStorage.length + 1);
		var myresult = str4 + ", " + Numf  + ", " + textf + ", ";
		localStorage.setItem(n,myresult);
		cleanfields();
		poptextarea();
	}
	else
	{
		alert ("Please enter values.");
	}
}
// delete all the local starage values
function clearlocal(){
      // erase all key values from store 
      localStorage.clear();
	  document.getElementById("total").value	= 0;
	  document.getElementById("lextxtarea").value = " ";
}

function emaillocal()
{

}
// NOT USED populate the array to input into the email as a csv
function popAray(){
	var i = 0;
	var listArry = [];
	alert("popAray " );
	
	for(i=0; i<10; i++){
	var localvalues = localStorage.getItem("expense");
	alert("localvalue1 " + localvalues);
	listArry.push(localvalues);}
	
	for(i=0; i<listArry.length; i++){
	alert("1 " + listArry[i]);}
//	
}
// clean the fields for re-input
function cleanfields(){
		document.getElementById("lexnum").value = 0;
		document.getElementById("lextext").value = " ";
		document.getElementById("lexSign").checked = false;
}	
 function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function newExpens(){
var lexexpense = " ";
alert("new  expense to be added here, chrome remember but the rest not");
}

   