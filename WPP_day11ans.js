// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31


function checkIncreasingMode(a, b, c) {
    // Check if the numbers are in strict increasing order
    if (a < b && b < c) {
        return "Strict mode"; // Return "Strict mode" if a < b and b < c
    } 
    // Check if the numbers are in soft increasing order
    else if (a <= b && b <= c) {
        return "Soft mode"; // Return "Soft mode" if a <= b and b <= c
    } 
    // If neither strict nor soft conditions are met
    else {
        return "Not increasing"; // Return "Not increasing" if neither condition is satisfied
    }
}


console.log(checkIncreasingMode(10, 15, 31)); // Output: Strict mode
console.log(checkIncreasingMode(24, 22, 31)); // Output: Not increasing
console.log(checkIncreasingMode(22, 22, 31)); // Output: Soft mode
console.log(checkIncreasingMode(1, 2, 2));    // Output: Soft mode
console.log(checkIncreasingMode(2, 2, 2));    // Output: Soft mode
console.log(checkIncreasingMode(3, 2, 1));    // Output: Not increasing
