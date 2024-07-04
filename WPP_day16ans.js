// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swapFirstAndLast(arr) {
    if (arr.length < 1) {
        return "Array length should be at least 1.";
    }

    // Swap the first and last elements using a temporary variable
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    return arr;
}


const array = [1, 2, 3, 4, 5];
console.log("Original Array:", array);
console.log("Array after swapping first and last elements:", swapFirstAndLast(array)); // Output should be [5, 2, 3, 4, 1]
