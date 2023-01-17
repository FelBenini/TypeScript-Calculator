const display : HTMLElement = document.getElementById("display")!
const clear_all : HTMLElement = document.getElementById("ac")!
const append : HTMLElement = document.getElementById("plus")!
const test : any = document.querySelectorAll(".button-number")!
const equals : HTMLElement = document.getElementById("equals")!

append.addEventListener("click", function() {
    display.textContent += "+"
})

clear_all.addEventListener("click", function() {
    display.textContent = ""
})

test.forEach((button) => {
    button.addEventListener("click", function() {
        display.textContent += button.textContent
    })
})

equals.addEventListener("click", function() {
    display.textContent = eval(display.textContent)
})