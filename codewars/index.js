var number = function (array) {
	return array.length
		? array.map((el, ind) => `${ind + 1}: ${el}`)
		: array
}

console.log(number([]));