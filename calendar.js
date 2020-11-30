async function fetchDaysFromApi() {
    try {
        // const today = new Date();
        // let month = today.getMonth();

        //För att hämta alla månader
        // let month = today.getMonth()+1;
        // const url = 'http://sholiday.faboul.se/dagar/v2.1/2020/'+month;

        const url = 'http://sholiday.faboul.se/dagar/v2.1/2020/11';

        const result = await fetch(url);
        const data = await result.json();
    
        presentDays(data.dagar);   
    } catch (error) {
        console.error(error);  
    }
}

function presentDays(allDaysForNovember) {
    const container = document.getElementById('calendar-container');
    container.innerHTML = "";

    const daysOfMonth = getDays(allDaysForNovember);
    const listItems = createListItems(daysOfMonth);
    container.append(...listItems);    
    //console.log(daysOfMonth)
}

function createListItems(daysOfMonth) {
    const listItems = []
    let listWithTodo = JSON.parse(localStorage.getItem("todoList")) || []
    // console.log(listWithTodo)
    
    
    for (const day of daysOfMonth) {
        const todosToday = document.createElement('p')
        
        todosToday.innerText = ''

        todosToday.classList = 'calendar-item'
        
        const dayDiv = document.createElement('div');
        dayDiv.classList = 'dayDiv'
        let dayToday = new Date(day.datum).getDate()
        dayDiv.innerHTML = dayToday;
        listItems.push(dayDiv);
        //console.log(dayToday)
        //console.log(day.datum)
        dayDiv.appendChild(todosToday)
        
        //console.log(listWithTodo)

        let count = 0
        for (const todo of listWithTodo) {
            if (todo.date == day.datum) {
                count++
            }
        }
        todosToday.innerText = 'Memos:' + ' ' + count
    }
    
    return listItems;
}

function getDays(allDaysForNovember) {
    const daysOfMonth = [];
    
    for (const day of allDaysForNovember) {
        if (day.datum) {
            daysOfMonth.push(day);
        }
    }

    return daysOfMonth
}