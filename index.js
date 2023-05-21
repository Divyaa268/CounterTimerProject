const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");


// calculating everything in millisecond
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;


const timerFunction = () => {

    const now = new Date();
    let dd = String(now.getDate()).padStart(2, "0");
    let mm = String(now.getMonth()+ 1).padStart(2,"0");

    setInterval(() => { 

        // setting the end day 
    const timer = new Date("05/25/2023").getTime();

    // setting the today's date 
    const today = new Date().getTime();

    const difference = timer - today;

    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day) / hour);
    const leftMinute = Math.floor((difference % hour) / minute);
    const leftSecond = Math.floor((difference % minute) / second);

    daysElement.innerText = leftDay;
    hoursElement.innerText =  leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;  

    console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);
    }, 0);

};

timerFunction();