const display : any = document.getElementById("counting-display")!
const result : HTMLElement = document.getElementById("result-display")!
const clear_all : HTMLElement = document.getElementById("ac")!
const clear : HTMLElement = document.getElementById("c")!
const append : HTMLElement = document.getElementById("plus")!
const minus : HTMLElement = document.getElementById("minus")!
const divided : HTMLElement = document.getElementById("division")!
const multiplied : HTMLElement = document.getElementById("multiplication")!
const numbers : any = document.querySelectorAll(".button-number")!
const equals : HTMLElement = document.getElementById("equals")!
const dot : HTMLElement = document.getElementById("dot")!

//Operations

append.addEventListener("click", function() {
    if (!isOperation() && !isMultiply()) {
        updateDisplay("+")
}})

minus.addEventListener("click", function() {
    if(!isOperation()) {
        updateDisplay("-")
    }
})

divided.addEventListener("click", function() {
    if(!isOperation() && !isMultiply()) {
        updateDisplay("/")
    }
})

multiplied.addEventListener("click", function() {
    if(!isOperation() && !isMultiply()) {
        updateDisplay("*")
    }
})

clear_all.addEventListener("click", function() {
    display.textContent = ""
    result.textContent = "0"
})

clear.addEventListener("click", function() {
    display.textContent = display.textContent?.slice(0, -1)
    if (display.textContent != "") {
        result.textContent = eval(display.textContent)
    } else {
        result.textContent = 0
    }
})

numbers.forEach((button) => {
    button.addEventListener("click", function() {
        updateDisplay(button.textContent)
    })
})

equals.addEventListener("click", function() {
    display.textContent = eval(display.textContent)
})

dot.addEventListener("click", function() {
    let dotver = display.textContent.replaceAll('*', '$').replaceAll('-', '$').replaceAll('+', '$').replaceAll("/", '$').split('$');
    let numberIncludesDot = dotver[dotver.length - 1].includes(".");
    console.log(numberIncludesDot)
    if(!numberIncludesDot) {
        display.textContent += "."
    }
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

function updateDisplay(digit) {
    display.textContent += digit
    result.textContent = `= ${eval(display.textContent)}`
}