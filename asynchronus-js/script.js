// asynchronous concept
/*
setTimeout(() => {
    console.log("first-line")
}, 3000)

const interval = setInterval(() => {
    console.log("Interval executing")
}, 1000)

setTimeout(() => {
    clearInterval(interval)
}, 10000)


console.log("second-line")
*/

// callbacks
const result = (result) => {
    console.log("result = " + result)
}

const sum = (num1, num2, callbacks) => {
    let add = num1 + num2
    callbacks(add)
}
const subtraction = (num1, num2, callbacks) => {
    let sub = num1 - num2
    callbacks(sub)
}

sum(10, 5, result)
subtraction(10, 5, result)