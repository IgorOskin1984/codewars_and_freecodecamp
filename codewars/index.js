function find(array, element) {
	return array.includes(element)
		? array.indexOf(element)
		: "Not found"
}

console.log(find([2, 3, 5, 7, 11], 5));


//function find(array, element) {
//  for (let i = 0; i < array.length; i++) {
//    if (array[i] === element) return i;
//  }
//  return "Not found";
//}