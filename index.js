// calculating everything in millisecond
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;


const timerFunction = () => {

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

    console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);
    }, 1000);

};

timerFunction();