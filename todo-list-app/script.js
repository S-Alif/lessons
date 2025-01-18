const todoForm = document.getElementById("todo-form")

let todoListArray = []
let updating = false
let updatingTodoIndex = 0


const generateListItem = () => {
    const displayDiv = document.getElementById("display-list")

    displayDiv.innerHTML = ""

    todoListArray.map((todo, index) => {
        let markUp = `
            <div class="list-item" id="${index}">
                <p>${todo.todo}</p>
                <p>${todo.date}</p>
                <button onclick="removeTodoFromList('${todo.todo}')">Remove</button>
                <button onclick="updateTodo(${index})">update</button>
            <div>
        `
        displayDiv.insertAdjacentHTML("beforeend", markUp)
    })
}

// load todolist on page load
window.addEventListener('load', () => {
    console.log(localStorage.getItem("todolist"))
    console.log(JSON.parse(localStorage.getItem("todolist")))

    // todo list array input
    const saveTodo = localStorage.getItem("todolist")
    if(saveTodo) {
        todoListArray = JSON.parse(saveTodo)
        generateListItem()
    } 

})

todoForm.onsubmit = (event) => {
    event.preventDefault()

    // FormData object
    let formData = new FormData(todoForm)

    // make an object of the data inputs from the form
    let data = Object.fromEntries(formData)

    // check data
    if(data.todo.trim() == "" || data.todo.trim().length <= 5){
        return alert("Please enter a valid todo item with a minimum length of 6 characters.")
    }
    if(data.date.trim() == ""){
        return alert("Date cannot be empty")
    }

    if(updating){
        todoListArray[updatingTodoIndex] = data
        updating = false
        updatingTodoIndex = 0
    }
    else{
        todoListArray.push(data)
    }

    localStorage.setItem("todolist", JSON.stringify(todoListArray))

    todoForm.reset()
    generateListItem()
}

// remove a todo list
const removeTodoFromList = (todo) => {
    todoListArray = todoListArray.filter(item => item.todo !== todo)
    localStorage.setItem("todolist", JSON.stringify(todoListArray))
    generateListItem()
}

// add update values to the form
const updateTodo = (index) => {
    updating = true
    let todo = todoListArray[index]
    updatingTodoIndex = index

    // set the form values
    document.getElementById("todo-input").value = todo.todo
    document.getElementById("todo-date").value = todo.date
}