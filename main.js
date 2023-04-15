
var daysE1 = document.getElementById('days');
var hoursE1 = document.getElementById('hours');
var minutesE1 = document.getElementById('minutes');
var secondsE1 = document.getElementById('seconds');



var new_year = '1 Jan 2024'

function countDown()
{
    var new_year_date = new Date(new_year);
    var current_date = new Date();

    var total_seconds = (new_year_date - current_date) / 1000;

    var days = Math.floor((total_seconds / 3600) / 24);

    var hours = Math.floor(total_seconds / 3600 ) % 24;

    var minutes = Math.floor(total_seconds / 60 ) % 60;

    var seconds = Math.floor(total_seconds % 60);

    daysE1.innerHTML =  (days);
    hoursE1.innerHTML =  formatTime(hours);
    minutesE1.innerHTML =  formatTime(minutes);
    secondsE1.innerHTML =  formatTime(seconds);

}

function formatTime(time)
{
    return time < 10 ? (`0${time}`) : time;
}

// Initial call
countDown();

setInterval(countDown , 1000);

