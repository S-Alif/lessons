// elements
const fname = document.getElementById("fname")
// const lname = document.getElementById("lname")
const imgInput = document.getElementById('file-input')
const submitBtn = document.getElementById("submit-btn")
const displayDiv = document.getElementById("display-data")

function displayUserData(data){
    console.log(data)
    displayDiv.innerHTML = `
        <h2>User Details:</h2>
        <p>First Name: ${data.firstName}</p>
        <p>Last Name: ${data.lastName}</p>
    `
}

// submit button click / form submit
submitBtn.onclick = function (){
    const firstName = fname.value
    // const lastName = lname.value
    const files = imgInput.files
    console.log(files[0])

    let fileReader = new FileReader()
    fileReader.onload = function(file){
        console.log(file.target.result)
        let imageTag = document.createElement('img')
        imageTag.src = file.target.result
        displayDiv.append(imageTag)
    }
    // console.log(fileReader)

    fileReader.readAsDataURL(files[0])


    //if (firstName.trim().length <= 2 || lastName.trim().length <= 2) return alert("Please enter something")

    // displayUserData({
    //     firstName,
    //     lastName
    // })
}