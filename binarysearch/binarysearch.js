function binarySearch(floor, ceil) {
    guessCount++;
    const guess = Math.floor((ceil - floor) / 2) + floor;
    
    if (numbersList[guess - 1] > randomNumber) { 
        return binarySearch(floor, guess - 1);  
    } else if (numbersList[guess - 1] < randomNumber) {
        return binarySearch(guess + 1, ceil); 
    } else {
        return numbersList[guess - 1]; 
    }
}

let guessCount = 0;

const numbersList = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000000) + 1);
numbersList.sort((a, b) => a - b);

const randomNumber = numbersList[Math.floor(Math.random() * numbersList.length)];

console.log(binarySearch(0,numbersList.length), "guesses:", guessCount)
