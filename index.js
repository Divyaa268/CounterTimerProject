const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const counterTimer = document.querySelector(".counterTimer");
const heading = document.querySelector("h1");


// calculating everything in millisecond
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;


const timerFunction = () => {

    let now = new Date();
    let dd = String(now.getDate()).padStart(2, "0");
    let mm = String(now.getMonth()+ 1).padStart(2,"0");
    let yyyy = now.getFullYear();

    const enteredDay = prompt("Enter Day").padStart(2,"0");
    const enteredMonth = prompt("Enter Month").padStart(2,"0");

    now = `${mm}/${dd}/${yyyy}`;

    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

    // to check if date is from next year
    if(now > targetDate)
    {
        console.log(`${enteredMonth}/${enteredDay}/${yyyy+1}`);
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy+1}`;
    }

    const intervalId = setInterval(() => { 

        // setting the end day and converting it to milliseconds
    const timer = new Date(targetDate).getTime();

    // setting the today's date 
    const today = new Date().getTime();

    const difference = timer - today;

    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSecond = Math.floor((difference % minute) / second);

    // to show timer in DOM
    daysElement.innerText = leftDay;
    hoursElement.innerText =  leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;  

    // When user gives date that is in past 
    if(difference < 0)
    {
        counterTimer.style.display = "none";
        heading.innerText = "Time's up!";
        clearInterval(intervalId); // to prevent time for running in case the time is negative value

    }

    console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);
    }, 0);

};

timerFunction();