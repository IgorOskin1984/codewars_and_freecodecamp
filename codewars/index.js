//function wordsToHex(words) {
//	const arr = words.trim().split(' ');
//	const filteredArr = arr.filter((item) => item.length > 0);
//	console.log(filteredArr);

//	const hexArray = filteredArr.map((word) => {
//		let hexNumber = '#';
//		for (let i = 0; i < 3; i++) {
//			hexNumber += word[i]
//				? word[i].charCodeAt(0).toString(16)
//				: '00';
//		}
//		return hexNumber;
//	});

//	return hexArray;
//}





function wordsToHex(string) {
	const words = string.split(' ');

	const hexValues = words.map((word) => {
		let hex = '#';

		// Take the first three letters of the word
		const slicedWord = word.slice(0, 3);

		// Convert each character to its ASCII code and append it to the hex value
		for (let i = 0; i < 3; i++) {
			const char = slicedWord[i];
			const asciiCode = char ? char.charCodeAt(0).toString(16) : '00';
			hex += asciiCode;
		}

		return hex;
	});

	return hexValues;
}

console.log(wordsToHex('    Hello, my     name is Gary and I like cheese.'));
