//Write a JavaScript program to calculate the days left before Christmas.

// Function to calculate the days left before Christmas
function daysUntilChristmas() {
    const today = new Date(); // Get the current date
    const currentYear = today.getFullYear(); // Get the current year
    const christmas = new Date(currentYear, 11, 25); // Set date for Christmas (December 25th),  Month is 0-indexed (11 is December)
    //console.log(christmas); //2024-12-25T18:30:00.000Z

    // Check if Christmas has already passed this year
    if (today > christmas) {
        // If Christmas has already passed, set the date for next year's Christmas
        christmas.setFullYear(currentYear + 1);
    }

    // Calculate the difference in milliseconds
    const timeDiff = christmas - today;
    
    // Convert milliseconds to days
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); //milliseconds seconds minutes hours

    return daysDiff;
}

// Display the result
console.log(`Days until Christmas: ${daysUntilChristmas()}`);


