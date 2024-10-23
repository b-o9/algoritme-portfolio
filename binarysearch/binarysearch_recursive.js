let iterationCount = 0;

function binarySearchRecursive(search, values, start, end, comparator = (a, b) => a - b) {
    iterationCount++;
    console.group(`Iteration ${iterationCount}`);

    if (start > end) {
        console.groupEnd();
        return -1;
    }

    const mid = Math.floor((start + end) / 2);
    const compareResult = comparator(search, values[mid]);

    if (compareResult === 0) {
        console.groupEnd();
        return mid;
    } else if (compareResult < 0) {
        console.groupEnd();
        return binarySearchRecursive(search, values, start, mid - 1, comparator);
    } else {
        console.groupEnd();
        return binarySearchRecursive(search, values, mid + 1, end, comparator);
    }
}

const numbersList = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
const searchValue = 33;

iterationCount = 0;
const result = binarySearchRecursive(searchValue, numbersList, 0, numbersList.length - 1);

console.log(`Result: ${result}, Value found at index: ${result}`);
console.log(`Total iterations: ${iterationCount}`);
