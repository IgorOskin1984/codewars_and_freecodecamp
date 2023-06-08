function rgb(r, g, b) {
	const res = (num) => {
		if (num <= 0) return '00'
		if (num > 255) return "FF"
		const hex = num.toString(16).toUpperCase()
		return (num < 15)
			? `0${hex}`
			: hex
	}
	return res(r) + res(g) + res(b)
}

console.log(rgb(159, 226, 6));
