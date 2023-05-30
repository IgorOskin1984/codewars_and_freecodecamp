function getMiddle(s) {
	let midle = Math.round(s.length / 2);
	if (s.length % 2 == 0) {
		return s[midle - 1] + s[midle];
	}
	else {
		return s[midle - 1];
	}
}

getMiddle('testing')