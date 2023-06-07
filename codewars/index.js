function arrayPlusArray(arr1, arr2) {
	const sum = (arr) => {
		return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
	}
	return sum(arr1) + sum(arr2);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
