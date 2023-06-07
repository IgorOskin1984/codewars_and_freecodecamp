function chooseBestSum(t, k, ls) {
	let bestSum = null;

	function findBestSum(currSum, townsVisited, startIndex) {
		if (townsVisited === k) {
			if (currSum <= t && (bestSum === null || currSum > bestSum)) {
				bestSum = currSum;
			}
			return;
		}

		for (let i = startIndex; i < ls.length; i++) {
			findBestSum(currSum + ls[i], townsVisited + 1, i + 1);
		}
	}

	findBestSum(0, 0, 0);
	return bestSum;
}

// Example usage:
const ts = [50, 55, 56, 57, 58];
console.log(chooseBestSum(163, 3, ts));  // Output: 163


//! надо разобраться