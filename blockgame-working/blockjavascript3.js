"use strict";
onLoad="myFunctionrandom(); return true;"

//new 1/11
   var button = document.getElementById('myButton');
   // Define a click listener on the button
   button.addEventListener('click', processClick);
  

   // 1/11
function myImg1() {
	img1.src(explode.jpg);
	
}

function myFunctionrandom() {
    var x = Math.floor((Math.random() * 10) + 1);
	    document.getElementById("demo").innerHTML = x;
	if (x > 6){x = 3}; if (x <  1){x=2};
    document.getElementById("demo3").innerHTML = x;
		return x;
}
function myFunctionrandom2() {
    var x = Math.floor((Math.random() * 10) + 1);
	    document.getElementById("demo").innerHTML = x;
	if (x > 6){x = 5}; if (x <  1){x=2};
    document.getElementById("demo").innerHTML = x;
		return x;
}
       var canvas, ctx;
	for (var i = 0, n = localStorage.length; i < n; i++){
        var key = localStorage.key(i);
        var value = localStorage[key];	
	}     
 function init() {		 
         // This function is called after the page is loaded
		 // populate textarea
		 //poptextarea();
         // 1 - Get the first canvas
         canvas = document.getElementById('myCanvas1');
         // 2 - Get the context
         ctx=canvas.getContext("2d");

	    //	canvas.addEventListener('keydown', handleKeydown, false);
		//	canvas.addEventListener('mouseenter', setFocus, false);
		//canvas.addEventListener('mouseout', unsetFocus, false);	
		 canvas.addEventListener('mousedown', function (evt){
		 mousePos = getMousePos(canvas, evt);
		 setColor(mousePos.x, mousePos.y);}, false);
			 				
		var a = 1;
		var bad = 0;
		//requestAnimationFrame(drawSomething1a);
		//a = 1;
		//requestAnimationFrame(drawSomething2a);
		//	canvas.addEventListener('mousemove', function (evt) {
		//	mousePos = getMousePos(canvas, evt);}, false);
         // 3 - we can draw
		 
		 drawblock();
		// werk nie hier nie computerMove();
	 
       }
// add all the values in the localstorage to the textarea.
//d.toDateString();
	function poptextarea(){
		var total = 0;
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
		myresult = value;
		var z = new Date();
		var y = myresult.substr(0,4);
		var m = myresult.substr(5,2);
		m--; // subtract 1 from the month as january value in date = 0 etc
		var dag = myresult.substr(8,2);
		z.setFullYear( y , m , dag);
			var tt = myresult.split(",",2);			
			var tt1 = tt.slice(1,4);	
			var ttt = parseInt(tt1);
		var rad1 = document.getElementById("lexdate");
		rad1.checked = true
		if (rad1.checked = true){
		//	if (z = d){
			document.getElementById("lextxtarea").value += myresult;
			total = total + ttt;
			}
		//}
		;	
		document.getElementById("total").innerHTML = total;	 
		document.getElementById("demo").innerHTML= total;	
	};
}		   
  // draw a  rectangle based on kleur and fill from the top	
   function drawSomething1a() 
	{     ctx.fillStyle="blue";  	  
		 a ++;
		 ctx.fillRect(block1V, blockH1, blocksize, a);		   	 
		 if (a < 49) {  
			requestAnimationFrame(drawSomething1a);}
	}
	// draw a animated block for block 2
 function drawSomething2a() 
	{      	 
         ctx.fillStyle="blue";
		   a ++;
		 ctx.fillRect(block2V , blockH1, blocksize, a);
		 ctx.stroke();
		 if (a < 49) {  
			requestAnimationFrame(drawSomething2a);}
	}
// this draw block1 animated for computer move	 1AC
 function drawSomething1ac() 
	{      	 
         ctx.fillStyle="pink";
		   a ++;
		 ctx.fillRect(block1V , blockH1, blocksize, a);		 
		if (a < 49) {  
			requestAnimationFrame(drawSomething1ac);}
	}		
	
// this draw block2 animated for computer move	 2AC
 function drawSomething2ac() 
	{      	 
         ctx.fillStyle="pink";
		   a ++;
		 ctx.fillRect(block2V , blockH1, blocksize, a); 
		if (a < 49) {  
			requestAnimationFrame(drawSomething2ac);}
	}	
	// without animation
	    function drawSomething2(kleur) {
         // draw a  rectangle based on kleur	 
         ctx.fillStyle=kleur;
		 ctx.fillRect(block2V , blockH1, blocksize, 49);
		 

       }
	// create a timer bar to indicate the computers thinking
   function drawtimer(a) 
	{   ctx.fillStyle="green";  
		ctx.clearRect(200, 0, 5, 150);	
		a ++;
		ctx.fillRect(200, 0, 5, a);		   	 
		if (a < 100) {  
		// alert ("this is the value of  a " + a);
			requestAnimationFrame(drawtimer);}		
	}	
	// draw cross through finished block
function drawendline1()
{	  ctx.moveTo(0, 0);
	  ctx.lineTo(50, 50);	
	  ctx.moveTo(50, 0);
	  ctx.lineTo(0, 50);
	}
function drawendline2(){
	  ctx.moveTo(51, 0);
	  ctx.lineTo(100, 50);
	  ctx.moveTo(100, 0);
	  ctx.lineTo(51, 50);
	}
function drawendline3(){
	  ctx.moveTo(101, 0);
	  ctx.lineTo(150, 50);
	  ctx.moveTo(150, 0);
	  ctx.lineTo(101, 50);	
	}
function drawendline4(){
	  ctx.moveTo(0, 51);
	  ctx.lineTo(50, 100);
	  ctx.moveTo(50, 50);
	  ctx.lineTo(0, 100);	
	}
	
function drawblock() {
		 drawSomething1('#FF0000');
		 drawSomething2('white');
		 drawSomething3('#FF0000');
		 drawSomething4('white');
		 drawSomething5('#FF0000');
		 drawSomething6('white');		 
		 drawSomething7('#FF0000');
		 drawSomething8('white');
		 drawSomething9('#FF0000');	
}	

 // detect were the mouse was when it was clicked and change the color of that block.  
function setColor(x, y) {
	//decide on rectangle to redraw and w color to send
// block 1
 //alert("tesating x " + x + " " + blockH2 + " y" + y + " " +  blocksize);
	if(x < blockH2 && y < blocksize)		
		{
			if (block1Clicks < randomClickNo)
			{ 
				checkForWin1(1);
				var a = 1;
				ctx.fillStyle="green";
				drawSomething1a();				
				drawtimer(0);
				computerMove();
			}
}					

// block 2		
	if (x > blockH2 && x < blockH3)
		{if (y < blocksize )
		{	
		if (block2Clicks < randomClickNo)
		{checkForWin2(2);
		if (countblock2 < 1){ ctx.fillStyle="blue";
				var a = 1;
				drawSomething2a();
				countblock2 = 1;     }
		else {			
			var a = 0;
			ctx.fillStyle="blue";
			drawSomething2a();
			countblock2 = 0;
			//alert('You have clicked block after' + countblock2 );			
		}
		computerMove();		
		} 
		}}
	// block 3 
	if (x > blockH3 && x < blockH4)
		{ if (y < (blocksize) )
		{if (block3Clicks < randomClickNo){
			checkForWin3(3);
			if (countblock3 < 1)
			{
			drawSomething3('blue');
			countblock3 = 1;
			computerMove(3);
			}
			else 			
			{
			drawSomething3('green');
			countblock3 = 0;
			computerMove(3);
			}
											}
		}}	
		// block4
	if (x > blockH1 && x < blocksize)
		{ if (y < (blocksize * 2) && (y > blocksize ))
		{if (block4Clicks < randomClickNo){
			checkForWin4(4);
			if (countblock4 < 1)
			{
			drawSomething4('blue');
			countblock4 = 1;
			computerMove(4);
			}
			else 			
			{
			drawSomething4('green');
			countblock4 = 0;
			computerMove(4);
			}
		}
		}}
		// block 5
	if (x > blockH2 && x < blockH3)
		{ if (y < block3V && (y > block2V ))
		{if (block5Clicks < randomClickNo){
			checkForWin5(5);
		if (countblock5 < 1)
			{
			drawSomething5('blue');
			countblock5 = 1;
			computerMove(5);
			}
		else 			
			{
			drawSomething5('green');
			countblock5 = 0;
			computerMove(5);
			}
											}
		}}	
// block 6
	if (x > blockH3 && x < blockH4)
		{ if (y < block3V && (y > block2V ))
		{if (block6Clicks < randomClickNo){
			checkForWin6(6);
			if (countblock6 < 1)
			{
			drawSomething6('blue');
			countblock6 = 1;
			computerMove(6);
			}
			else 			
			{
			drawSomething6('green');
			countblock6 = 0;
			computerMove(6);
			}
											}
		}}	
// block 7
	if (x > blockH1 && x < blockH2)
		{ if (y < block4V && (y > block3V ))
		{if (block7Clicks < randomClickNo){
			checkForWin7(7);
		if (countblock7 < 1)
			{
			drawSomething7('blue');
			countblock7 = 1;
			computerMove(7);
			}
		else 			
			{
			drawSomething7('green');
			countblock7 = 0;
			computerMove(7);
			}
											}
		}}
		// block 8
	if (x > blockH2 && x < blockH3)
		{ if (y < block4V && (y > block3V ))
		{if (block8Clicks < randomClickNo){
		checkForWin8(8);
		if (countblock8 < 1)
			{
			drawSomething8('blue');
			countblock8 = 1;
			computerMove(8);
			}
		else 			
			{
			drawSomething8('green');
			countblock8 = 0;
			computerMove(8);
			}
											}
		}}
		// block 9
	if (x > blockH3 && x < blockH4)
		{if (y < block4V && (y > block3V ))
		{if (block9Clicks < randomClickNo){
			checkForWin9(9);
		if (countblock9 < 1)
			{
			drawSomething9('blue');
			countblock9 = 1;
			computerMove(9);
			}
		else 			
			{
			drawSomething9('green');
			countblock9 = 0;
			computerMove(9);
			}
											}
		}}
		drawSomething10(220, 220, 20, 'blue');
		ctx.clearRect(220, 50, 5, 50);			
		ctx.font = "30px Arial";
		ctx.fillStyle = 'Black';		
		ctx.fillText('                ',220,50);
		ctx.fillText(block1Clicks,220,50);
		ctx.stroke();
}	
function computerMove(blockno){ 
a = 0;
//ctx.clearRect(200, 0, 5, 150);
//drawtimer(0);
	compmovedone = "n";
	alert("computer will now change the color!");
	computerMove1(compmovedone);

	if (compmovedone === "n"){
	computerMove2(compmovedone);}
	
	if (compmovedone === "n"){
	computerMove3(compmovedone);}
	
	if (compmovedone === "n"){	
	computerMove4(compmovedone);}
	
	if (compmovedone === "n"){	
	computerMove5(compmovedone);}

	if (compmovedone ==="n"){	
	computerMove6(compmovedone);}
	
	if (compmovedone === "n"){	
	computerMove7(compmovedone);}

	if (compmovedone === "n"){	
	computerMove8(compmovedone);}

	if (compmovedone === "n"){	
	computerMove9(compmovedone);}


	if (comptotal > 0){
	
	ctx.font = "20px Arial";
	ctx.clearRect(250, 50, 5, 50);	
	ctx.fillStyle = 'Black';		
	ctx.fillText('                ',250,50);
	ctx.fillText(comptotal,250,50);
						}
	ctx.stroke();
	//ctx.clearRect(200, 0, 5, 150);
	//	ctx.font = "20px Arial";
	//	ctx.fillText(block1Clicks,200,50);
	
}

function computerMove1(done){
	if (block1Clicks < randomClickNo)
	{
	var a = 0;
	requestAnimationFrame(drawSomething1ac);
	block1Clicks ++;
	compmovedone = "y";	
	testCompWin1();}

	}
	
function testCompWin1(){
	if (Number(block1Clicks) === Number(randomClickNo))
	{comptotal ++; 
	drawendline1();
	alert( "compmove1");}
}	
function checkForWin1(blocka)
	{ 
	if(Number(block1Clicks) < Number(randomClickNo))
		{ block1Clicks ++;			
		  if(Number(block1Clicks) === Number(randomClickNo))
		  {usertotal ++;
			drawendline1();
		  }
		}
	}	

function computerMove2(){
	if (compmovedone = 'n')
	{
		if (Number(block2Clicks) < Number(randomClickNo)){
			var a = 0;
			requestAnimationFrame(drawSomething2ac);
			block2Clicks ++;
			compmovedone = "y";
			testCompWin2();
			}
		};
}
function testCompWin2(){
	if (Number(block2Clicks) === Number(randomClickNo))
	{comptotal ++;
		drawendline2();
	}
}	
function computerMove3(){
	if (compmovedone = "n"){
	if (block3Clicks < randomClickNo)
	{alert("in comp change 3 " + block3Clicks );
	drawSomething3('pink');
	block3Clicks = block3Clicks + 1;
		compmovedone = "y";
		testCompWin3();
	}
}}
function testCompWin3(){
	if (Number(block3Clicks) === Number(randomClickNo))
	{comptotal ++;
		drawendline3();
	}
}
function computerMove4(){
	if (compmovedone = "n"){	
	if (block4Clicks < randomClickNo)
	{
	drawSomething4('pink');
	block4Clicks = block4Clicks + 1;
		compmovedone = 'y';
		testCompWin4();
	}
}}
function testCompWin4(){
	if (Number(block3Clicks) === Number(randomClickNo))
	{comptotal ++;
		drawendline4();
	}
}
function computerMove5(){
	if (compmovedone = 'n'){
	if (block5Clicks < randomClickNo)
	{
	drawSomething5('pink');
	block5Clicks = block5Clicks + 1;
		compmovedone = 'y';
	}
}}
function computerMove6(){
	if (compmovedone = 'n'){
	if (block6Clicks < randomClickNo)
	{
	drawSomething6('pink');
	block6Clicks = block6Clicks + 1;
		compmovedone = 'y';
	}
}}
function computerMove7(){
	if (compmovedone = 'n'){	
	if (block7Clicks < randomClickNo)
	{
	drawSomething7('pink');
	block7Clicks = block7Clicks + 1;
		compmovedone = 'y';
	}
}}
function computerMove8(){
	if (compmovedone = 'n'){	
	if (block8Clicks < randomClickNo)
	{
	drawSomething8('pink');
	block8Clicks = block8Clicks + 1;
		compmovedone = 'y';
	}
}}
function computerMove9(){
	if (compmovedone = 'n'){	
	if (block9Clicks < randomClickNo)
	{
	drawSomething9('pink');
	block9Clicks = block9Clicks + 1;
		compmovedone = 'y';
	}
}}
 function drawSomething1(kleur) {
         // draw a  rectangle based on kleur
         ctx.fillStyle=kleur;
          ctx.fillRect(block1V, blockH1, blocksize, blocksize);
       }
	   
	   
 function drawSomething3(kleur) {
         // draw a  rectangle based on kleur
         ctx.fillStyle=kleur;
		 ctx.fillRect(block3V , blockH1, blocksize, blocksize); 
       }
	   
 function drawSomething4(kleur) {
         // draw a  rectangle based on kleur
         ctx.fillStyle=kleur;
		 ctx.fillRect(block1V , blockH2, blocksize, blocksize); 
       }
 function drawSomething5(kleur) {
         // draw a  rectangle based on kleur
         ctx.fillStyle=kleur;
		 ctx.fillRect(block2V , blockH2, blocksize, blocksize); 
       }
 function drawSomething6(kleur) {
         // draw a  rectangle based on kleur
         ctx.fillStyle=kleur;
		 ctx.fillRect(block3V , blockH2, blocksize, blocksize); 
       }
	    function drawSomething7(kleur) {
         // draw a  rectangle based on kleur
         ctx.fillStyle=kleur;
		 ctx.fillRect(block1V , blockH3, blocksize, blocksize); 
       }
 function drawSomething8(kleur) {
         // draw a  rectangle based on kleur
         ctx.fillStyle=kleur;
		 ctx.fillRect(block2V , blockH3, blocksize, blocksize); 
       }
 function drawSomething9(kleur) {
         // draw a  rectangle based on kleur
         ctx.fillStyle=kleur;
		 ctx.fillRect(block3V , blockH3, blocksize, blocksize); 
       }
function drawsomething10(x, y ,z, color){
     ctx.strokeStyle = color;
     ctx.arc(x, y, r, 0, 2*Math.PI);
ctx.stroke();}

    function getMousePos(canvas, evt) {
       // necessary to take into account CSS boundaries
       var rect = canvas.getBoundingClientRect();
       return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
       };
    }
	   
   function handleKeydown(e){
		drawSomething2(blue);
	return false;}	
	
	
	function checkForWin2(blockb)
	{
		if(block2Clicks < randomClickNo)
		{
			block2Clicks ++;
		}
	}
	function checkForWin3(blocka)
	{	

		if(block3Clicks < randomClickNo)
		{
			block3Clicks ++;
		}
	}
	function checkForWin4(blocka)
	{	
	
		if(block4Clicks < randomClickNo)
		{
			block4Clicks ++;
		}
	}
	function checkForWin5(blocka)
	{	
		if(block5Clicks < randomClickNo)
		{
			block5Clicks ++;
		}
	}
	function checkForWin6(blocka)
	{	
		if(block6Clicks < randomClickNo)
		{
			block6Clicks ++;
		}
	}
	function checkForWin7(blocka)
	
	{
		if(block7Clicks < randomClickNo)
		{
			block7Clicks ++;
		}
	}
	function checkForWin8(blocka)

	{
		if(block8Clicks < randomClickNo)
		{
			block8Clicks ++;
		}
	}
	function checkForWin9(blocka)
	{
		if(block9Clicks < randomClickNo)
		{
			block9Clicks ++;
		}
	}	
		
function setFocus(evt) {
    canvas.focus();
};
function unsetFocus(evt) {
   canvas.blur();
};

// NOT USED populate the array to input into the textarea "lextxtarea"
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
	
 function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


   