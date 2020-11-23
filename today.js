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
    weekdatHolder.innertext = getWeekdayString(date);
}

function updateDateToday(date) {

}

function updateTimeNow(date) {
    let hours = date.getHours();
}

function getWeekdayString(date) {
    const weekdayIndex = date.getDay();
    switch (weekdayIndex) {
        case 0: return '';
        case 0: return '';
        case 0: return '';
        case 0: return '';
        case 0: return '';
        case 0: return '';
        case 0: return '';
    }
}