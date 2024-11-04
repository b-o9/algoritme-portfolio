function isSorted(list,index) {
    if (list.length == index){
        return "Solved";
    } else{
        if (list[index] >= list[index-1]){
            return isSorted(list,index+1);
        } else {
            return index;
        }
    }
}

const numbersList = [1,21, 22, 23, 24,3, 25, 26, 27, 28, 29, 30, 31, 32, 33];

console.log(isSorted(numbersList,1));
