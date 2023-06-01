export function spinWords(words: string): string {
	let arr = words.split(' ');
	arr = arr.map(word => {
		if (word.length >= 5) {
			console.log(word);
			word = word.split('').reverse().join('')
			console.log(word);
			return word
		}
		return word
	});

	//console.log(arr.join(' '));

	return arr.join(' ')
}

spinWords('This is another test');

//export function spinWords(words: string): string {
//  return words
//    .split(" ")
//    .map((el) => el.length >= 5 ? reverse(el) : el)
//    .join(" ");
//};

//const reverse = (str: string): string => {
//  return str.split("").reverse().join("");
//};
