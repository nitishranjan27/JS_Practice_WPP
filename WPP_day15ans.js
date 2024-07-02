// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

function sumOfThreeElements(arr) {
    if (arr.length !== 3) {
        return "The array must have exactly 3 elements.";
    }
    let sum = arr[0] + arr[1] + arr[2];
    return sum;
}

const array = [5, 10, 15];
const result = sumOfThreeElements(array);
console.log(result); // Output: 30
