function digitalRoot(num) {
	console.log(num.toString().length);

	let sum = 0;

	const numArr = num.toString().split('');
	console.log(numArr);
	for (let i = 0; i < numArr.length; i++) {
		sum += parseInt(numArr[i]);
	}
	console.log(sum);

	if (sum > 9) {
		return digitalRoot(sum);
	}
	return sum;
}

digitalRoot(389098)