"use strict";
//onLoad="myFunctionrandom(); return true;"

function change_but55(answer){
	var property = 'but' + document.getElementById(answer);
	property.style.backgroundColor = "#A9A9A9";
//	alert('but55');
}
// change the button name , input the button id and new name
function change_butname(btn, nampie){
//	alert('btn' + btn);
	var btnNo = 'but' + btn;
	var property = document.getElementById(btnNo);
	property.value = nampie;
//	alert('prop ' + property.value);
	//btnNo.value = nampie;
}
function nextToValid(row, col){
	//test if the selected block is next to a previous block selected.
		a = 0;
		b = col - 1;
		c = row;
	/*if (row === 1){
		while ((a < 7) && (b >= 0)){
		if blocks0[b]
		a = a + 1
		}
	}*/
}
// input is 999 and any  text to change the value of the button
function alertmy(answer,text1)
{ if (wonthis !== 'Y'){
	document.getElementById("demo").innerHTML = '     ';
	var i = 0;
	var j = 0;	
	var col1 = (parseInt(answer.substr(1, 2))) - 1; //block number in the row

	var row1 = (parseInt(answer.substr(0, 1))); //row

	var num3 = parseInt(answer); // full blok number as numeric
	if(row1 == 0 || col1 == 0)
	{num3 = 0};

	var validMove = 'n';

	if(blocks[row1][col1] !== 0)
	{document.getElementById("demo").innerHTML = 'Not allowed';}
	else{
	j = (col1 - 1);
	if (j < 0){ j = 0};
	if (blocks[row1][j] == 1)
		{validMove = 'Y'; }
	else { i = row1 - 1; 
			if(i < 0){i = 0};
			if(blocks[i][col1] == 1)
			{ 
				validMove = 'Y';				
			}
			else{
				i = row1 + 1;
				if(blocks[i][col1] == 1)
			{
				validMove = 'Y'; 
			}}};	
		//		alert('validmove' + validMove);
		if(validMove == 'Y')
			{blocks[row1][col1] = 1;
			populateArray(row1,col1,users);
			//alert('answer' + answer);
			change_butname(answer, text1);
			//alert('hiert');
			testWinPlayer();
			computerMove();
			if(col1 == 6){playerEast = 1};
			}
		else {document.getElementById("demo").innerHTML = 'Not allowed';}
}}
//testWinPlayer();
}


function populateArray(row,col,users){
	blocks[row][col] = users;	
}

function testSetBlock4(){
	//alert('setBlock4' + arrayCol);
	
	while ((arrayCol < 7)||(compset == 'N'))
	    {
	     if ((blocks4[arrayCol] === 2) || (blocks4[arrayCol] === 1))
			{z = 1;}
		 else
			{		
			blocks4[arrayCol] = 2;
			var var6 = 0;
			var6 = (500 + arrayCol + 1);
			change_butname(var6, 'cc');	
			compset = 'Y';
			arrayCol=200;
			}
		arrayCol=arrayCol-1;
		if (arrayCol === 0)
			{ arrayCol=99;
			}
		}	
}
function testSetBlock5(){
alert('settestblock5');
}
//old code folow from here
function myFunctionrandom() {
 /*   var x = Math.floor((Math.random() * 10) + 1);
	    document.getElementById("demo").innerHTML = x;
	if (x > 6){x = 3}; if (x <  1){x=2};
    document.getElementById("demo3").innerHTML = x;
		return x;*/
	blocks4[6] = 2;
	blocks4[0] = users;
	//alert(users);
	change_but55('406');
	change_butname('406', 'CC');
	change_but55('400');
	change_butname('400', 'BB');
}
function myFunctionrandom2() {
    var x = Math.floor((Math.random() * 10) + 1);
	    document.getElementById("demo").innerHTML = x;
	if (x > 6){x = 5}; if (x <  1){x=2};
    document.getElementById("demo").innerHTML = x;
		return x;

       var canvas, ctx;
	for (var i = 0, n = localStorage.length; i < n; i++){
        var key = localStorage.key(i);
        var value = localStorage[key];	
	} 
}    
 function init() {		 
	blocks[4][0] = 1;
	change_butname('401', "bb");
	blocks[4][6] = 2;
	change_butname('407', "cc");	
       }
	   
function setInit()	   
{
//alert('test init');
alertmy('401', ' bb');	

}
   
function setInit2()	   
{
//alert('test init');
	alertmy('407', ' cc');

}


//1/11 end		
// SAVE the values to localstorage, call functions to pop the text area //and  clearing fields for next input	 
function saveme(){
	
	var Numf = document.getElementById("lexnum").value;
	var Datf = document.getElementById("lexdate").value;
	var textf = document.getElementById("lextext").value;
	if (Numf > " "){	
	var myresult = Datf + ", " + Numf  + ", " + textf;
	var n = "expense" + (localStorage.length + 1);
	var myresult = Datf + ", " + Numf  + ", " + textf;
	localStorage.setItem(n,myresult);
	document.getElementById("lextxtarea").value += myresult;
	cleanfields();

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
	  document.getElementById("lextxtarea").value = " ";
}

 function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


   