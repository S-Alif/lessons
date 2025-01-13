const todoForm = document.getElementById("todo-form")

let todoListArray = []

const generateListItem = () => {
    const displayDiv = document.getElementById("display-list")

    displayDiv.innerHTML = ""

    todoListArray.map((todo, index) => {
        let markUp = `
            <div class="list-item" id="${index}">
                <p>${todo.todo}</p>
                <p>${todo.date}</p>
                <button onclick="removeTodoFromList('${todo.todo}')">Remove</button>
            <div>
        `
        displayDiv.insertAdjacentHTML("beforeend", markUp) 
    })
}

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

    todoListArray.push(data)
    console.log(todoListArray)

    todoForm.reset()
    generateListItem()
}

// remove a todo list
const removeTodoFromList = (todo) => {
    todoListArray = todoListArray.filter(item => item.todo !== todo)
    generateListItem()
}