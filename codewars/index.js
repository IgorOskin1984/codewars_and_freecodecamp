function firstNonConsecutive(arr) {
	if (!arr.length) return null
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] !== 1) return arr[i]
	}
	return null;
}

console.log(firstNonConsecutive([-7, -6, -4, -3, -2, 0, 1, 2]));
