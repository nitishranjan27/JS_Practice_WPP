// Write a JavaScript program to create a string from a given string. 
//This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.


function createModifiedString(input) {
    if (input.length < 3) {
        return "String length must be 3 or more";
    }

    // Extract the last 3 characters of the string
    const lastThreeChars = input.slice(-3);

    // Use template literals to create the new string
    const result = `${lastThreeChars}${input}${lastThreeChars}`;

    return result;
}

// Example usage:
const originalString1 = "abcdef";
console.log(createModifiedString(originalString1)); // Output: "defabcdefdef"

const originalString2 = "12345";
console.log(createModifiedString(originalString2)); // Output: "34512345345"

const originalString3 = "xyz";
console.log(createModifiedString(originalString3)); // Output: "xyzxyzxyz"

const originalString4 = "ab"; // String length less than 3
console.log(createModifiedString(originalString4)); // Output: "String length must be 3 or more"
