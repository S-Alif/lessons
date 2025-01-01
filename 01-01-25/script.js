// elements
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const submitBtn = document.getElementById("submit-btn")

console.log({fname})

// submit button click / form submit
submitBtn.onclick = function (){
    const firstName = fname.value
    const lastName = lname.value

    if (firstName.trim().length <= 2 || lastName.trim().length <= 2) return alert("Please enter something")

    alert(`${firstName} ${lastName}`)
}
