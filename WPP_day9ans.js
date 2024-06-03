// Write a JavaScript program to find the closest value to 100 from two numerical values

function closestTo100(num1, num2) {
    // Calculate the absolute difference of num1 and num2 from 100
    let diff1 = Math.abs(num1 - 100);
    let diff2 = Math.abs(num2 - 100);

    // Use a ternary operator to return the closest value
    return (diff1 < diff2) ? num1 : num2;
}

// Example usage:
let value1 = 90;
let value2 = 80;
console.log("Closest value to 100 is:", closestTo100(value1, value2)); // Output: Closest value to 100 is: 90
