// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers. 

function maxAdjacentDifference(arr) {
    if (arr.length < 2) {
        return 0; // If there are less than 2 elements, no adjacent pairs exist.
    }

    let maxDiff = 0; // Initialize the maximum difference to 0.

    for (let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1]); // Calculate the difference between adjacent elements.
        if (diff > maxDiff) {
            maxDiff = diff; // Update maxDiff if the current difference is greater.
        }
    }

    return maxDiff; // Return the maximum difference found.
}


let arr = [2, 9, 1, 4, 6, 8];
console.log(maxAdjacentDifference(arr)); // Output: 8 (|9-1| = 8)
