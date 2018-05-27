function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}


function isEmpty(str) {
  str = trim(str);
  return ((str == null) || (str.length == 0))
}


function isDigit(c) {
  return ((c >= "0") && (c <= "9"))
}


function isInteger(str) {  
  var i;
  for (i = 0; i < str.length; i++) {
	var c = str.charAt(i);
	if (!isDigit(c)) return false;
  }
  return true;
}


function monthModify(txtElement, btnElement) {
	
	switch(btnElement.name) {
		case 'increase':
			if(isEmpty(txtElement.value)) {
				txtElement.value = '1';
			} else if(isInteger(txtElement.value)){
				txtElement.value ++;
			} else {
				alert('The value you are trying to increment is not an integer');
				txtElement.value = '';
			}
		break;

		case 'decrease': 
			if(isEmpty(txtElement.value)) {
				txtElement.value = '0';
			} else if(isInteger(txtElement.value)){
				if(txtElement.value > 0) {
					txtElement.value --;
				} else {
					alert('The minimum value is zero for this field');
				}
			} else {
				alert('The value you are trying to decrement is not an integer');
				txtElement.value = '';
			}
		break;

		default: 
	}
}

function initForm(oForm, element_name, init_txt) {
	frmElement = oForm.elements[element_name];
	frmElement.value = init_txt;
}

function showFormData(oForm) {
   var msg = "The data that you entered for the form : \n";
   
   for (i = 0; i < oForm.length, oForm.elements[i].getAttribute("type") !== 'button'; i++) {
	   msg += oForm.elements[i].tagName + " with 'name' attribute='" + oForm.elements[i].name + "' and data: ";
	   if(oForm.elements[i].value == null || oForm.elements[i].value == '') {
		msg += "NOT SET \n";
	   } else {
		   msg += oForm.elements[i].value + "\n";
	   }
   }

   alert(msg);
}


function clearFieldFirstTime(element) {
  if (element.counter==undefined) {
	element.counter = 1;
  }

  else {
	element.counter++;
  }

  if (element.counter == 1) {
	element.value = '';
  }
}

