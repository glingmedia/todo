async function fetchDaysFromApi() {
    try {
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
    console.log(daysOfMonth)
}

function createListItems(daysOfMonth) {
    const listItems = []

    for (const day of daysOfMonth) {
        const dayDiv = document.createElement('div');
        dayDiv.classList = 'dayDiv'
        let dag = new Date(day.datum).getDate()
        dayDiv.innerHTML = day.veckodag + '</br>' + dag;
        listItems.push(dayDiv);
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