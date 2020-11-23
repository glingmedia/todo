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

}

function updateDateToday(date) {

}

function updateTimeNow(date) {

}

console.log(date);