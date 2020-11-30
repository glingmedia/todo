function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const date = new Date();
    
    printTime(date);
    printWeekday(date);
    printMonth(date);
}

//Printar ut tiden
function printTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formatTimeValue(hours);
    minutes = formatTimeValue(minutes);
    seconds = formatTimeValue(seconds);

    const timeHolder = document.getElementById('time');
    timeHolder.innerText = hours + ':' + minutes + ':' + seconds;
}

//Printar ut veckodag
function printWeekday(date) {
    const weekdayHolder = document.getElementById('dayofweek');
    weekdayHolder.innerText = getWeekdayString(date);
}

//Printar ut månad
function printMonth(date) {
    const monthHolder = document.getElementById('month');
    monthHolder.innerText = getMonthString(date);
}

//Formaterar veckodagen korrekt istället för bara ett värde
function getWeekdayString(date) {
    const weekdayIndex = date.getDay();
    switch (weekdayIndex) {
        case 0: return 'Söndag';
        case 1: return 'Måndag';
        case 2: return 'Tisdag';
        case 3: return 'Onsdag';
        case 4: return 'Torsdag';
        case 5: return 'Fredag';
        case 6: return 'Lördag';
    }
}

//Formaterar månaden korrekt istället för bara ett värde
function getMonthString(date) {
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();

    const prefix = dayOfMonth + ' ';

    switch (monthIndex) {
        case 0: return prefix + 'Januari';
        case 1: return prefix + 'Februari';
        case 2: return prefix + 'Mars';
        case 3: return prefix + 'April';
        case 4: return prefix + 'Maj';
        case 5: return prefix + 'Juni';
        case 6: return prefix + 'Juli';
        case 7: return prefix + 'Augusti';
        case 8: return prefix + 'September';
        case 9: return prefix + 'Oktober';
        case 10: return prefix + 'November';
        case 11: return prefix + 'December';
    }
}

// Lägger till en nolla om värdet visar under 10
function formatTimeValue(value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}