//Write a JavaScript program to check whether a string starts with 'Java'  if it does not then  return False.

function startsWithJava(input) {
    if (input.startsWith('Java')) {
        return true;
    }
    return false;
}

// Example usage:
const string1 = "JavaScript";
console.log(startsWithJava(string1)); // Output: true

const string2 = "JavaBeans";
console.log(startsWithJava(string2)); // Output: true

const string3 = "CoffeScript";
console.log(startsWithJava(string3)); // Output: false

const string4 = "Python";
console.log(startsWithJava(string4)); // Output: false
