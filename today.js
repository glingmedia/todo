window.addEventListener('load', main);

function main() {
    startClock();
}

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const date = new Date();
    updateWeekday(date);
    updateDateToday(date);
    updateTimeNow(date);
}

function updateWeekday(date) {
    const weekdayHolder = document.getElementById('weekday');
    weekdayHolder.innertext = getWeekdayString(date);
}

function updateDateToday(date) {
    const weekdayHolder = document.getElementById('datetoday');
    weekdayHolder.innertext = getMonthString(date);
}

function updateTimeNow(date) {
    let hours = date.getHours();
    let hours = date.getHours();
    let hours = date.getHours();
}

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

function getMonthString(date) {
    const dayofMonth = date.getDate();
    const monthIndex = date.getMonth();
    const prefix = dayofMonth + 'HALLÅ';

    switch (monthIndex) {
        case 0: return 'Januari';
        case 1: return 'Februari';
        case 2: return 'Mars';
        case 3: return 'April';
        case 4: return 'Maj';
        case 5: return 'Juni';
        case 6: return 'Juli';
        case 7: return 'Augusti';
        case 8: return 'September';
        case 9: return 'Oktober';
        case 10: return 'November';
        case 11: return 'December';
    }
}

function formatDateValue(value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}