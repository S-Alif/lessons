const displayDiv = document.getElementById('display-users')
const userTable = document.getElementById('user-table')
const userList = document.getElementById('user-list')
const displayUserList = document.getElementById('display-user-list')


window.addEventListener('load', async () => {
    let urlParams = new URLSearchParams(window.location.search)
    if(urlParams){
        let id = urlParams.get('id')
        
        if(!id) return
        try {
            let result = await fetch("https://dummyjson.com/users/"+id)
            let data = await result.json()
            displayDiv.innerHTML = JSON.stringify(data)
        } catch (error) {
            alert(error.messaage)
        }

    }
})


const displayData = async (data) => {
    // let data = await fetchData()

    displayUserList.innerHTML = ""
    
    data?.users.map((value, index) => {

        const {id, firstName, lastName, age, email, address, gender, phone} = value

        let htmlMarkup = `
            <tr class="user-info">
                <td>${index+1}</td>
                <td>
                    <a href="http://127.0.0.1:5500/async-await/user.html?id=${id}" target="_blank">${firstName} ${lastName}</a>
                </td>
                <td>${age}</td>
                <td><a href="mailto:${email}">${email}</a></td>
                <td>${address?.address}, ${address?.city}, ${address?.state} ${address?.country}</td>
                <td>${gender}</td>
                <td>
                    <a href="tel:${phone}">${phone}</a>
                </td>
            </tr>
        `

        displayUserList.insertAdjacentHTML("beforeend", htmlMarkup)
    })
}

// fetching data
// const fetchData = async () => {
//     fetch('https://dummyjson.com/users')
//     .then(async (result) => {
//         let data = await result.json()
//         console.log(data)
//         displayData(data)
//     })
//     .catch((error) => {
//         console.log(error.message)
//     })
// }

const fetchData = async () => {
    try {
        let result = await fetch("https://dummyjson.com/user", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
        let data = await result.json()
        userList.style.display = "block"
        displayData(data)
    } catch (error) {
        console.log(error)
        alert(error.messaage)
    }
}
