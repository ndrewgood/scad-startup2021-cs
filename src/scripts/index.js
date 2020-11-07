// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import './sketch.js'

// \/ All of your javascript should go here \/

import countdown from 'countdown';

// let cd = countdown(1612483200, null, countdown.DAYS);
setInterval(() => {
    let cd = countdown( new Date(2021, 2, 5), null, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS );
    document.getElementById("days").innerHTML = cd.days;
    document.getElementById("hours").innerHTML = cd.hours;
    document.getElementById("minutes").innerHTML = cd.minutes;
    document.getElementById("seconds").innerHTML = cd.seconds;
}, 1000);





// console.log(cd);