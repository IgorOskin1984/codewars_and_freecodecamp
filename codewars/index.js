function openOrSenior(data) {
	if (!Array.isArray(data)) {
		console.log('not valid input data');
		return
	}
	const output = [];
	data.forEach(arr => {
		if (Array.isArray(arr)) {
			arr[0] >= 55
				? arr[1] > 7
					? output.push("Senior")
					: output.push("Open")
				: output.push("Open");
		}
	})
	console.log(output);
	return output
}
openOrSenior('hi')

//! лучшее решение
//function openOrSenior(data){
//  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
//}

//input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//[[45, 12],[55,21],[19, -2],[104, 20]]
//['Open', 'Senior', 'Open', 'Senior']