function add(num) {
	const fn = function (x) {
		return add(num + x);
	};

	fn.valueOf = function () {
		return num;
	};

	return fn;
}

console.log(add(1)(2));