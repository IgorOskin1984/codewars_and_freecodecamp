function moveZeros(arr) {
	arr.forEach(num => {
		if (num === 0) {
			arr.splice(arr.indexOf(num), 1)
			arr.push(num);
		}
	});
	//console.log(arr);
	return arr
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);