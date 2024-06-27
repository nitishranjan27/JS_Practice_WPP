// Write a JavaScript program to extract the first half of an even string.

function extractFirstHalf(str) {
    // Check if the length of the string is even
    if (str.length % 2 === 0) {
        // Calculate the midpoint of the string
        let midIndex = str.length / 2;
        // Extract and return the first half of the string
        return str.substring(0, midIndex);
    } else {
        return "The length of the string is not even.";
    }
}


let evenString = "abcdefgh";
let result = extractFirstHalf(evenString);
console.log(result); // Output: "abcd"

let evenString1 = "shabsauasu";
let result1 = extractFirstHalf(evenString1);
console.log(result1); // Output: "shabs"