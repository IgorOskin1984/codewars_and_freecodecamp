function sortArray(arr) {
	const oddArray = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
	console.log(oddArray);
	let j = 0;
	arr = arr.map(num => {
		if (num % 2 !== 0) {
			num = oddArray[j];
			j++;
		}
		return num
	})
	console.log(arr);
	return arr
}

sortArray([14, -49, 32, -49, -47, -32, -27, 6, -10, -10, -27, -8, 28, -4, -47])
//[ 14, -49, 32, -47, -27, -32, 3, 6, -10, -10, 11, -8, 28, -4, 25 ]

