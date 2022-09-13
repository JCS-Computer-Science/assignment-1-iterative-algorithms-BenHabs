function bubbleSort(array) {
    for(let a = 0; a < array.length; a++){

        for(let b = 0; b < (array.length - a - 1); b++){
            if(array[b] > array[b+1]){
                let burger = array[b];
                array[b] = array[b + 1];
                array[b + 1] = burger; 
            }
        }
    }
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

	return array;
}

module.exports = bubbleSort;
