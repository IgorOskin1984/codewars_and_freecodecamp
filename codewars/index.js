function scramble(str1, str2) {
	//console.log(str1, str2);
	let chars = str1
		.trim()
		.split('')
	//console.log(chars);
	let word = str2
		.trim()
		.split('')
	//console.log(word);
	let arr3 = [];
	for (let i = 0; i < chars.length; i++) {
		for (let j = 0; j < word.length; j++) {
			if (chars[i] === word[j]) {
				arr3.push(chars[i]);
				word.splice(j, 1);
				break;
			}
		}
	}
	//console.log(arr3);
	return arr3.length === str2.length ? true : false
}

let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
let s2 = "zyxcba".repeat(9_000);

console.log(scramble(s1, s2));

//'rkqodlw','world'
//'cedewaraaossoqqyt', 'codewars'
//'katas','steak'
//'scriptjavx','javascript'
//'scriptingjava','javascript'
//'scriptsjava','javascripts'
//'javscripts','javascript'
//'jscripts', 'javascript'
//'aabbcamaomsccdd','commas'
//'commas','commas'
//'sammoc','commas'

//function scramble(str1, str2) {
//	debugger
//	const charCount = {};

//	for (let char of str1) {
//		charCount[char] = (charCount[char] || 0) + 1;
//	}

//	for (let char of str2) {
//		if (charCount[char] && charCount[char] > 0) {
//			charCount[char]--;
//		} else {
//			return false;
//		}
//	}

//	return true;
//}



//console.log(scramble('scriptjavx', 'javascript')); 
