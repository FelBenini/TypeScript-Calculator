var display = document.getElementById("display");
var append = document.getElementById("plus");
var test = document.querySelectorAll(".button-number");
var equals = document.getElementById("equals");
append.addEventListener("click", function () {
    display.textContent += "+";
});
test.forEach(function (button) {
    button.addEventListener("click", function () {
        display.textContent += button.textContent;
    });
});
equals.addEventListener("click", function () {
    display.textContent = eval(display.textContent);
});
