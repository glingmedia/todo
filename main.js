window.addEventListener('load', main);

function main(){
    addEventListeners()
}

function addEventListeners() {
    fetchDaysFromApi()
    startClock()
    addTodoOnButton()
    printTodosInAside()
}