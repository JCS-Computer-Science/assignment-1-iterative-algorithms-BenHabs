function selectionSort(array) {
	for(let i = 0; i < array.length; i++){
		let min = i
		for(let q = i+1; q < array.length; q++){
			if(array[q] < array[min])[
				min=q
			]
		}
		if(i != min){
			let burger = array[i];
			array[i] = array[min];
			array[min] = burger;
		}
	}
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	return array;
}

module.exports = selectionSort;
