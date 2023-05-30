function rangeOfNumbers(startNum, endNum) {
	debugger
	if (startNum > endNum) {
		return [];
	} else {
		const numbers = rangeOfNumbers(startNum, endNum - 1);
		numbers.push(endNum);
		console.log(numbers);
		return numbers;
	}
}

rangeOfNumbers(6, 9)