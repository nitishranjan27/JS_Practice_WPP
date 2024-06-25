//  Write a JavaScript program to count the number of vowels in a given string.

function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;
                break;
            }
        }
    }

    return count;
}


let exampleString = "Hello World!";
console.log(countVowels(exampleString));  // Output: 3
