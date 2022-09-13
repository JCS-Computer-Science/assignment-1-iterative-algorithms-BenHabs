function insertionSort(array) {
	for(i = 1; i < array.length; i++){
		let current = array[i]
		let j = i-1;
		while((j > -1) && (current < array[j])){
			array[j + 1] = array[j];
			j--;
		}	
		array[j+1] = current
	}
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	return array;
}

module.exports = insertionSort;
