function generateHashtag(str) {
	if (!str.trim().length) {
		console.log('false');
		return false
	}
	const arr = str.split(' ');
	console.log(arr);
	let result = arr.map(word => {
		if (!word.trim().length) {
			//console.log('trim().length');
			return
		}
		let wordArr = word.split('');
		wordArr[0] = wordArr[0].toUpperCase();
		return wordArr.join('');
	})

	result = `#${result.join('')}`
	console.log(result);
	return (result.length < 141) ? result : false;

}
generateHashtag("code" + " ".repeat(140) + "wars")

//*chat=========================================

function generateHashtag(str) {
	const words = str.trim().split(' ');

	if (words.length === 0) {
		return false;
	}

	const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

	const hashtag = '#' + capitalizedWords.join('');

	return (hashtag.length <= 140) ? hashtag : false;
}

// Example usage:
console.log(generateHashtag('hello world'));  // Output: "#HelloWorld"
