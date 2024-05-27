//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

// Prompt the user to enter a positive number
let userInput = prompt("Please enter a positive number:");

// Convert the input to a number
let number = Number(userInput);

// Check if the input is a valid positive number
if (number > 0 && Number.isInteger(number)) {
    // Check if the number is a multiple of 3 or 7
    if (number % 3 === 0 || number % 7 === 0) {
        console.log(`${number} is a multiple of 3 or 7.`);
    } else {
        console.log(`${number} is not a multiple of 3 or 7.`);
    }
} else {
    console.log("Invalid input. Please enter a valid positive integer.");
}
