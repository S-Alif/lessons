const displayDiv = document.getElementById('display-users')

// fetching data
const fetchData = async () => {
    fetch('https://dummyjson.com/users')
    .then(async (result) => {
        let data = await result.json()
        displayData(data)
    })
    .catch((error) => {
        console.log(error.message)
    })
}

const displayData = async (data) => {
    // let data = await fetchData()
    
    data?.users.map((value, index) => {
        let htmlMarkup = `
            <div class="user-card" id="${index}">
                <img src="${value.image}" />
                <h3>${index + 1}. ${value.firstName} ${value.lastName}</h3>
                <p>Age: ${value.age}</p>
            </div>
        `

        displayDiv.insertAdjacentHTML("beforeend", htmlMarkup)
    })
}

fetchData()
