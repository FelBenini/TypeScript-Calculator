const display : HTMLElement = document.getElementById("display")!
const clear_all : HTMLElement = document.getElementById("ac")!
const append : HTMLElement = document.getElementById("plus")!
const numbers : any = document.querySelectorAll(".button-number")!
const equals : HTMLElement = document.getElementById("equals")!

//Operations

append.addEventListener("click", function() {
    if (!isOperation() && !isMultiply()) {
        display.textContent += "+"
    }})

clear_all.addEventListener("click", function() {
    display.textContent = ""
})

numbers.forEach((button) => {
    button.addEventListener("click", function() {
        display.textContent += button.textContent
    })
})

equals.addEventListener("click", function() {
    display.textContent = eval(display.textContent)
})

function isOperation() {
    if (display.textContent?.slice(-1) === "+") {
        return true
    } else if (display.textContent?.slice(-1) === "-") {
        return true
    } else return false
}

function isMultiply() {
    if (display.textContent?.slice(-1) === "/") {
        return true;
    } else if (display.textContent?.slice(-1) === "*") {
        return true
    } else return false
}