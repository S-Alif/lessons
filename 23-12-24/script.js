const btn = document.getElementById("btn")
const userDiv = document.querySelector('.show-users')
// const title = document.querySelector('.title')

const users = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Mike', age: 35}
]

function displayUsers() {
    users.map(function(value, index) {
        let p_tag = document.createElement('p')
        p_tag.textContent = index + 1 + ". Name : " + value.name
        p_tag.id = index

        userDiv.append(p_tag)
    })
}




// function getName(){
//     let name = prompt("Enter your name")
//     return name
// }

// function nameInput(){
//    let h1_tag = document.createElement('h1')
//    h1_tag.textContent = getName()
//    h1_tag.classList.add('createByjs')
//    title.append(h1_tag)
// }

// function makeElm() {
//     let button_tag = document.createElement('button')
//     button_tag.textContent = "Enter name"
//     button_tag.onclick = nameInput
//     button_tag.id = "new tag"
//     title.append(button_tag)
// }

// btn.addEventListener("click", function () {
//     // let name = prompt("Enter your name")
//     // if(name == null) return
//     // aDiv.innerText = `Hello, ${name}!`

//     aDiv.classList.add("test2")
// })

// btn.addEventListener("mouseover", function () {
//     btn.style.backgroundColor = "blue"
// })
// btn.addEventListener("mouseout", function () {
//     btn.style.backgroundColor = "red"
// })

