function binarySearch(floor, ceil) {
    guessCount++;
    console.log("Floor",floor,numbersList[floor]);
    console.log("ceil",ceil,numbersList[ceil]);

    if (floor > ceil) {
        return -1;
    }
    const guess = Math.floor((ceil - floor) / 2) + floor;

    if (numbersList[guess] > randomNumber) {
        return binarySearch(floor, guess - 1);
    } else if (numbersList[guess] < randomNumber) {
        return binarySearch(guess + 1, ceil);
    } else {
        return numbersList[guess];
    }
}



let guessCount = 0;

//const numbersList = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000000) + 1);
//numbersList.sort((a, b) => a - b);
//const randomNumber = numbersList[Math.floor(Math.random() * numbersList.length)];


const numbersList = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
const randomNumber = 33;


console.log(binarySearch(0,numbersList.length-1), "guesses:", guessCount, "number:", randomNumber);
