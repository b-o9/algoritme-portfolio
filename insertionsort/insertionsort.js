function insertionSortShift(list) {
    let iterationCount = 0;
    for (let i = 1; i < list.length; i++) {
        let key = list[i];
        let j = i - 1;
        while (j >= 0 && list[j] > key) {
            list[j + 1] = list[j]; 
            j--;
            iterationCount++; 
        }

        list[j + 1] = key;
        iterationCount++;
    }
    console.log(iterationCount);
    return list;
}

//const numbersList = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
//console.log(insertionSortShift(numbersList));


function insertionSortSwap(list) {
    let iterationCount = 0; 
    function swap(A, B) {
        [list[A], list[B]] = [list[B], list[A]];
    }

    for (let i = 1; i < list.length; i++) {
        let j = i;
        while (j > 0 && list[j] < list[j - 1]) {
            swap(j, j - 1);
            j--;
            iterationCount++; 
        }
        iterationCount++; 
    }

    console.log(iterationCount);
    return list;  
}

//const numbersList = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
//console.log(insertionSortSwap(numbersList));
