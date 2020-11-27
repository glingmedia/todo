

function addTodosOnButton(){
    const buttonTodo = document.getElementById('submitBtn')
    buttonTodo.addEventListener('click', addTodos)
}

function addTodos() {
    const todoDate = document.getElementById('date').value;
    const todoInput = document.getElementById('todoInput').value;
    
    addToStorage({date:todoDate, text:todoInput})
    printTodosInAside()
    
}


function addToStorage(todo) {
    let listWithTodo = JSON.parse(localStorage.getItem("todoList"))

    if (listWithTodo) {
        listWithTodo.push(todo)
    } else {
        listWithTodo = []
        listWithTodo.push(todo)
    }

    localStorage.setItem("todoList", JSON.stringify(listWithTodo))
}


function printTodosInAside() {
    const aside = document.getElementById('todoDiv')
    aside.innerHTML = ""
    const todo = JSON.parse(localStorage.getItem("todoList")) || []

    for (let i = 0; i < todo.length; i++) {
        const todosToPrint = todo[i];
        const divForTodo = document.createElement('div')

        const dateTodo = document.createElement('h5')
        dateTodo.classList = 'todoDate'
        dateTodo.innerText = todosToPrint.date

        const textDiv = document.createElement('div')
        textDiv.classList = 'textDiv'

        const textTodo = document.createElement('p')
        textTodo.classList = 'todoText'
        textTodo.innerText = todosToPrint.text

        const deleteBtn = document.createElement('p')
        deleteBtn.classlist = 'deleteBtn'
        deleteBtn.innerText = '✔️'
        deleteBtn.addEventListener('click', deleteTodo)

        textDiv.appendChild(textTodo)
        textDiv.appendChild(deleteBtn)
        divForTodo.appendChild(dateTodo)
        divForTodo.appendChild(textDiv)

        aside.appendChild(divForTodo)
        //console.log(todosToPrint)
    }
}

function deleteTodo(){
    console.log('add function here for delete todo')
}