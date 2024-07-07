// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replaced by 'b' or 'z' would be replaced by 'a'.

function replaceWithNextAlphabet(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let nextChar;

        // Check if the character is a lowercase letter
        if (char >= 'a' && char <= 'z') {
            nextChar = char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1); //lower letter 97 to 122
        }
        // Check if the character is an uppercase letter
        else if (char >= 'A' && char <= 'Z') {
            nextChar = char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1); //upper letter 65 to 90
        }
        // If the character is not a letter, keep it unchanged
        else {
            nextChar = char;
        }

        result += nextChar;
    }

    return result;
}

let input1 = "abcxyz";
let input2 = "ABCXYZ";
let input3 = "Hello, World!";
let input4 = "My Name is Nitish ";
console.log(replaceWithNextAlphabet(input1)); // Output: "bcdyza"
console.log(replaceWithNextAlphabet(input2)); // Output: "BCDYZA"
console.log(replaceWithNextAlphabet(input3)); // Output: "Ifmmp, Xpsme!"
console.log(replaceWithNextAlphabet(input4)); // Output: "Nz Obnf jt Ojujti "
