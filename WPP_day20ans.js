// Write a JavaScript program to reverse the order of bits in an integer. 
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87

function reverseBits(n) {
    let originalNumber = n;
    let binaryStr = "";
    let reversedBinaryStr = "";

    // Convert number to binary string
    for (let i = 7; i >= 0; i--) { // Assuming 8-bit integer
        let bit = (n >> i) & 1;
        binaryStr += bit;
    }

    // Reverse the binary string
    for (let i = 7; i >= 0; i--) { // Assuming 8-bit integer
        reversedBinaryStr += binaryStr[i];
    }

    // Convert reversed binary string to integer
    let reversedInt = parseInt(reversedBinaryStr, 2);

    // Output
    console.log(`Original number: ${originalNumber}`);
    console.log(`Binary: ${binaryStr}`);
    console.log(`Reversed binary: ${reversedBinaryStr}`);
    console.log(`Reversed integer: ${reversedInt}`);

    return reversedInt;
}

// Test cases
reverseBits(14); // Output: 112
console.log("-----------------");
reverseBits(56); // Output: 28
console.log("-----------------");
reverseBits(234); // Output: 87