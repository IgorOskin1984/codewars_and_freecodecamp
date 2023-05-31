function maxSequence(arr) {
	let maxSum = 0;
	let currentSum = 0;
	for (let i = 0; i < arr.length; i++) {
		currentSum += arr[i]
		if (currentSum < 0) {
			currentSum = 0
		}
		if (currentSum > maxSum) {
			maxSum = currentSum
		}
	}
	return maxSum
}


console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // Output: 6
