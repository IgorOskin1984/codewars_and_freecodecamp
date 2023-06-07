const reverseSeq = n => {
	if (n < 0) return false
	const arr = [];
	for (let i = n; i > 0; i--) {
		arr.push(i)
	}
	return arr;
};

console.log(reverseSeq(5));