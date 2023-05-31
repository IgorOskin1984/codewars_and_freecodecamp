const disemvowel = (str) => {
	console.log(str.length);
	if (typeof str !== 'string') {
		console.log('not a string');
		return
	} else {
		//debugger
		const vowels = ['a', 'e', 'i', 'o', 'u'];
		let newStr = str.toLowerCase()
		console.log(newStr);
		console.log(newStr.length);
		for (let i = 0; i < newStr.length; i++) {
			console.log(newStr[i]);
			if (vowels.includes(newStr[i])) {
				str = str.replace(str[i], '');
				newStr = newStr.replace(newStr[i], '');
			}
		}
		console.log(newStr);
		console.log(str);
	}
	return str
}

disemvowel2("No offense but,\nYour writing is among the worst I've ever read")

function disemvowel2(str) {
	console.log(str);
	if (typeof str !== 'string') {
		console.log('not a string');
		return
	} else {
		const vowels = ['a', 'e', 'i', 'o', 'u'];
		let newStr = '';
		for (let i = 0; i < str.length; i++) {
			if (!vowels.includes(str[i].toLowerCase())) {
				newStr += (str[i]);
			}
		}
		return newStr;
	}
}