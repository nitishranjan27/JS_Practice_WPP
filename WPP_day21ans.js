// Write a JavaScript program to remove all characters from a given string that appear more than once.

function removeDuplicates(str) {
    let charCount = {};
    let result = "";

    // Count frequency of each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Build the result string with characters that appear only once
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char] === 1) {
            result += char;
        }
    }

    return result;
}


let inputString = "programming";
let outputString = removeDuplicates(inputString);
console.log(outputString); // Output: "poain"
