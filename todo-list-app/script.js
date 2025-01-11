const todoForm = document.getElementById("todo-form")

const generateListItem = (listItem) => {
    const displayDiv = document.getElementById("display-list")
    let markUp = `
        <div class="list-item">
            <p>${listItem.todo}</p>
            <p>${listItem.date}</p>
        <div>
    `
    displayDiv.insertAdjacentHTML("beforeend", markUp) 
}

todoForm.onsubmit = (event) => {
    event.preventDefault()

    // FormData object
    let formData = new FormData(todoForm)

    // make an object of the data inputs from the form
    let data = Object.fromEntries(formData)
    console.log(data)

    todoForm.reset()
    generateListItem(data)
}
