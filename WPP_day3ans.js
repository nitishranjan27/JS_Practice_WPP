//Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
//The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// Import the 'readline' module from Node.js
const readline = require('readline');

// Generate a random number between 1 and 10 and assign it to 'randomNumber'
const randomNumber = Math.floor(Math.random() * 10) + 1;
//console.log(randomNumber);
// Create an interface for reading from the standard input (keyboard) and writing to the standard output (console)
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Prompt the user to input a guess number between 1 and 10
rl.question("Guess a number between 1 and 10: ", userGuess => {
    // Parse the user's input (which is initially a string) as an integer using parseInt() and check if it matches the random number
    console.log(parseInt(userGuess) === randomNumber ? "Good Work" : "Not matched");
    // Close the readline interface
    rl.close();
});

