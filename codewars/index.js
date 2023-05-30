function validatePIN(pin) {
	if (pin.length === 4 || pin.length === 6) {
		for (let i = 0; i < pin.length; i++) {
			if (isNaN(Number(pin[i]))) {
				console.log('false ', pin[i]);
				return false;
			}
			console.log('true ', pin[i]);
			//return true;
		}
		return true;
	}
	else {
		return false
	}
}

//!
//function validatePIN(pin) {
//  return /^(\d{4}|\d{6})$/.test(pin);
//}

validatePIN('123 ')