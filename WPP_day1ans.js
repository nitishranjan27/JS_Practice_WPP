//Display Current Day and Current Time

function getDateAndTime() {
    const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
    const now = new Date();

    const dateOfDay = WeekDays[now.getDay()];
    // console.log(dateOfDay);

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const clock = hours>=12 ? "PM" : "AM"; //Ternary or conditional operator

    const ClockHours = hours>12 ? hours-12 : hours; //converting 24 hours to 12 hours

    const CurrentDay = `Today is : ${dateOfDay}.` ;
    const CurrentTime = `Current time is : ${ClockHours} ${clock} : ${minutes} : ${seconds}`;
    return  CurrentDay + "\n" + CurrentTime;
}

console.log(getDateAndTime());
