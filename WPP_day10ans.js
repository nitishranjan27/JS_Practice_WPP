// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

function transformString(input) {
    let newString;
    if (input.length < 3) {
        newString = input.toUpperCase();
    } else {
        newString = input.slice(0, 3).toLowerCase() + input.slice(3);
    }
    return newString;
}

// Example usage:
const input1 = "HELLOWorld";
console.log(transformString(input1)); // Output: "helLOWorld"

const input2 = "Hi";
console.log(transformString(input2)); // Output: "HI"

const input3 = "JAVAScript";
console.log(transformString(input3)); // Output: "javAScript"
