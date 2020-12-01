// Lägger till onClick-funktion på knappen.
function addTodoOnButton(){
    const buttonTodo = document.getElementById('submitBtn');
    buttonTodo.addEventListener('click', addTodo);
}

// Sparar värdet av inputfälten.
function addTodo() {
    const todoDate = document.getElementById('date').value;
    const todoInput = document.getElementById('todoInput').value;
     
    addToStorage({date:todoDate, text:todoInput})
    printTodosInAside()   
}

// Lägger till todos i localstorage.
function addToStorage(todo) {
    let listWithTodo = JSON.parse(localStorage.getItem("todoList"));

    if (listWithTodo) {
        listWithTodo.push(todo);
    } else {
        listWithTodo = [];
        listWithTodo.push(todo);
    }

    localStorage.setItem("todoList", JSON.stringify(listWithTodo));
}

// Printar ut todos i asiden.
function printTodosInAside() {
    const aside = document.getElementById('todoDiv');
    aside.innerHTML = "";
    const todo = JSON.parse(localStorage.getItem("todoList")) || [];

    for (let i = 0; i < todo.length; i++) {
        const todosToPrint = todo[i];
        const divForTodo = document.createElement('div');

        divForTodo.id = i;

        const dateTodo = document.createElement('h5');
        dateTodo.classList = 'todoDate';
        dateTodo.innerText = todosToPrint.date;

        const textDiv = document.createElement('div');
        textDiv.classList = 'textDiv';

        const textTodo = document.createElement('p');
        textTodo.classList = 'todoText';
        textTodo.innerText = todosToPrint.text;

        const deleteBtn = document.createElement('p');
        deleteBtn.classlist = 'deleteBtn';
        deleteBtn.innerText = '❌';
        deleteBtn.addEventListener('click', deleteTodo);


        textDiv.appendChild(textTodo);
        dateTodo.appendChild(deleteBtn);
        divForTodo.appendChild(dateTodo);
        divForTodo.appendChild(textDiv);

        aside.appendChild(divForTodo);
    }
}

// Funktion för att ta bort todos i localstorage och i asiden.
function deleteTodo(clickEvent) {
    
    let listWithTodo = JSON.parse(localStorage.getItem("todoList"));
    
    let divForTodo = clickEvent.target.parentElement.parentElement;
    
    let index = divForTodo.id;
    listWithTodo.splice(index, 1);
        
    localStorage.setItem("todoList", JSON.stringify(listWithTodo));

    printTodosInAside()
    fetchMonthFromApi()
}