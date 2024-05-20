// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function removeCharacter(str, position) {
    if (position < 0 || position >= str.length) {
        // If the position is out of range, return the original string
        return str;
    }
    
    // Use slice to create a new string without the character at the specified position
    return str.slice(0, position) + str.slice(position + 1);
}

// Example usage:
let originalString = "Hello, World!";
let positionToRemove = 7;
let modifiedString = removeCharacter(originalString, positionToRemove);
console.log(modifiedString); // Outputs: "Hello, orld!"
