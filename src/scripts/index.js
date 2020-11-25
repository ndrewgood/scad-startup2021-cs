// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import './sketch.js'

// \/ All of your javascript should go here \/

import countdown from 'countdown';

// let cd = countdown(1612483200, null, countdown.DAYS);
setInterval(() => {
    let cd = countdown( new Date('February 4, 2021 11:00:00'), null, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS );
    document.getElementById("days").innerHTML = cd.days;
    document.getElementById("hours").innerHTML = cd.hours;
    document.getElementById("minutes").innerHTML = cd.minutes;
    document.getElementById("seconds").innerHTML = cd.seconds;

    document.getElementById("m-days").innerHTML = cd.days;
    document.getElementById("m-hours").innerHTML = cd.hours;
    document.getElementById("m-minutes").innerHTML = cd.minutes;
    document.getElementById("m-seconds").innerHTML = cd.seconds;
}, 1000);





// console.log(cd);