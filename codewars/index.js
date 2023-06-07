function humanReadable(seconds) {
	if (seconds < 0 || seconds > 359999) return;
	let hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
	let mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
	let sec = (seconds % 60).toString().padStart(2, '0');
	return `${hours}:${mins}:${sec}`;
}

console.log(humanReadable(0)); // Output: '00:00:00'


console.log(humanReadable(59)); // Output: '00:00:00'
