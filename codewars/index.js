function cakes(recipe, available) {
	//обозначить массив с переменными recipe и available
	//сравнить массивы
	//если в available нет нужного ингредиента - вернуть ложь
	//пройтись по объекту available и значение каждого ингридиента делить на соответствующее значение recipe
	//сохранять результаты деления в массиве сум
	//вернуть наименьшее значение из этого массива
	const recipeArr = Object.keys(recipe);
	const availableArr = Object.keys(available);
	const res = []
	let isValid = true;

	recipeArr.forEach((ingr) => {
		isValid = availableArr.includes(ingr);
		if (!isValid) return isValid
	})

	if (isValid === false) {
		console.log(isValid);
		return isValid;
	}
	else {
		availableArr.forEach(ingr => {
			let a = Math.floor(available[ingr] / recipe[ingr]);
			isNaN(a)
				? false
				: res.push(a)
		})

		console.log(Math.min(...res))
		return Math.min(...res)
	}
}

cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });