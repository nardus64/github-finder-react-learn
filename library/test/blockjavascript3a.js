"use strict";
/*computer turn to select ablock
1. select from the right
2. select a block next to any previous selected block
3. cannot click on previous selected block.
4. cannot jump ove user selected blocks
5.cannot click on a dioganal block
*/
function computerMove(){ 
	//alert('cm' + blocks);
	var z = 0;
	var var6 = 0;
	var arrayNo = 4;
	var arrayCol = 6;
	var finis = 'N';
	var compset = 'N';
	var moveBlocked = 'N';
	arrayTel = -1;
	teller = -1;
	if (wonthis !== 'Y'){
	if (blocks[4][6] == 2)
	  { 
	  var arrayColL = arrayCol + teller;
	 // alert('l = ' + arrayColL + '& 2 = ' + arrayNo);
	 // alert('cm');
		while (finis == 'N') 
	  { alert('cm' + arrayTel + 'cok' + arrayCol + ' arr ' + arrayNo);
	       if  (blocks[arrayNo][arrayColL] > 0) // select new blok
			{ moveBlocked = 'Y';			
			if (blocks[arrayNo][arrayColL] == 2)
				{//alert('tell' + teller);
				 arrayColL = arrayColL + teller;}
			else{
				if (blocks[arrayNo][arrayColL] == 1)
				{	
					arrayNo = arrayNo + arrayTel;
					testArrayNo();					
					arrayColL ++;					
					}
				}				
			if (arrayColL < 0){				
					teller   = 1;
					compwest = arrayNo;
					arrayNo  = 4;
					arrayCol = 6;}
			
			if (arrayColL >  6){
					  teller   = -1;
					  compEast = 1;
					  arrayNo  = 4;
					  arrayCol = 6;}
					  						
			if (arrayNo < 0){
				  arrayTel = 1;
				  compNorth = arrayCol + 1;
					  arrayNo  = 4;
					  arrayCol = 6;				  				  
					  }				
			
					if (arrayNo > 8){
						compSouth = arrayTel;
						arrayTel = -1;
						
					  arrayNo  = 4;
					  arrayCol = 6;											
							  }
			}
			else{moveBlocked = 'N';
						finis = 'y';
				}
		} //finis loop
		if (moveBlocked == 'N'){//alert('hier'+ arrayNo + ' ' + arrayColL);
						blocks[arrayNo][arrayColL] = 2;
						//alert(blocks[arrayNo]);
						var buttonNo = arrayColL + 1;
						/*var buttonNo = arrayColL;*/
						var6 = arrayNo + '0' + buttonNo;
						//alert(var6 + 'var6');
						change_butname(var6, 'cc');
					// perform a test if the game was won or lost
						testWinComp();
						if(arrayColL == 1){compWest = 1};
						}
	  }
	}
}
//test if player won after previous move 
function testWinPlayer()
{//alert('hier p');
	if(playerNorth > 0){
		var resultVar = playerNorth * playerEast;
	}
	if(playerSouth > 0){
		resultVar = resultVar +(playerSouth * PlayerEast);
	}
	if(playerEast > 0){
		resultVar = resultVar +(32);
	}	
	if (resultVar > 31){
		{  document.getElementById("demo").innerHTML = 'Player won this round!     ';
			wonthis = 'Y';
			alert('player won!');
	}
}
}
//test if the computer won after previous move
function testWinComp()
{ //alert('hier c');
	if(compNorth > 0){
		var resultVar = compNorth * compEast;
	}
	if(compSouth > 0){
		resultVar = resultVar +(compSouth * compEast);
	}
	if(compWest > 0){
		resultVar = resultVar + 32;
	}
	if (resultVar > 31){
		{  document.getElementById("demo").innerHTML = 'Computer won this round     ';
			wonthis = 'Y';
			alert('computer won!');
	}
}
}

function testArrayNo()
{
	if (arrayNo == -1)
	{
		arrayTel = 1;
		arrayNo  = 4;
	}
}


