function pillars(numPill, dist, width) {
	dist = (dist * 100) * (numPill - 1)
	console.log(dist);
	let totalWidth = width * numPill;
	console.log(width);
	return dist + totalWidth - (width * (numPill > 2 ? 2 : numPill))
}

console.log(pillars(1, 10, 10));