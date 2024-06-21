// Write a JavaScript program to reverse a given string.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example:
let originalString = "hello";
let reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"
