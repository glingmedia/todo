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
    updateDatetoday(date);
    updateTimenow(date);

    console.log(date)
}