function sum(arr, n) {
	if (n === 0) {
		return 0;
	}
	let a = sum(arr, n - 1) + arr[n - 1];
	return a
}
// Пример использования:
const arr = [11, 22, 33, 44, 5];
const n = 3;

const result = sum(arr, n);
console.log(result); // Вывод: 6 (1 + 2 + 3)
