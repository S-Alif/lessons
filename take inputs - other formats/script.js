// elements
const dateInput = document.getElementById('date-input')
const dateTime = document.getElementById('date-time')
const submitBtn = document.getElementById('submit-btn')

submitBtn.onclick = () => {
    // console.log(dateInput.value)
    let dateAndTime = dateTime.value.split("T")
    console.log(dateAndTime)

    let dateString = dateAndTime[0]
    console.log(dateString)

    let timeString = dateAndTime[1].split(":")
    console.log(timeString)

    let hours = timeString[0]
    console.log(hours)

    let minutes = timeString[1]
    console.log(minutes)
    
    let indicator = "AM"

    if(parseInt(hours) < 12){
        hours = hours
    }
    else{
        hours = parseInt(hours) - 12
        indicator = "PM"
    }

    console.log(`${dateString} \n ${hours} : ${minutes} ${indicator}`)
}