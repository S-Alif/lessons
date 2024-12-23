const btn = document.getElementById("btn")
const userDiv = document.querySelector('.show-users')
// const title = document.querySelector('.title')

const users = [
    {name: 'John', age: 30},
    {name: 'Jane', age: 25},
    {name: 'Mike', age: 35},
    {name: 'Tinny', age: 85},
]

// easy one
function displayUsers() {
    userDiv.classList.add("display-cards")

    users.map(function(value, index) {
        let htmlMarkup = `
            <div class="user-card" id="${index}">
                <h3>${value.name}</h3>
                <p>Age: ${value.age}</p>
            </div>
        `

        userDiv.insertAdjacentHTML("beforeend", htmlMarkup)
    })

}

// function displayUsers() {

//     userDiv.classList.add("display-cards")

//     users.map(function(value, index) {

//         // create h3 tag for name
//         let h3 = document.createElement('h3')
//         h3.textContent = value.name

//         // create p tag for age
//         let p_tag = document.createElement('p')
//         p_tag.textContent = "Age : " + value.age
//         p_tag.id = index

//         // create a div to wrap h3 and p tag
//         let wrapperDiv = document.createElement('div')
//         wrapperDiv.classList.add('user-card')

//         wrapperDiv.append(h3)
//         wrapperDiv.append(p_tag)

//         // finally insert the wrapper into the user div
//         userDiv.append(wrapperDiv)
//     })
// }




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

