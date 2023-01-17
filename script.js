var display = document.getElementById("counting-display");
var result = document.getElementById("result-display");
var clear_all = document.getElementById("ac");
var clear = document.getElementById("c");
var append = document.getElementById("plus");
var minus = document.getElementById("minus");
var divided = document.getElementById("division");
var multiplied = document.getElementById("multiplication");
var numbers = document.querySelectorAll(".button-number");
var equals = document.getElementById("equals");
var dot = document.getElementById("dot");
//Operations
append.addEventListener("click", function () {
    if (!isOperation() && !isMultiply()) {
        updateDisplay("+");
    }
});
minus.addEventListener("click", function () {
    if (!isOperation()) {
        updateDisplay("-");
    }
});
divided.addEventListener("click", function () {
    if (!isOperation() && !isMultiply()) {
        updateDisplay("/");
    }
});
multiplied.addEventListener("click", function () {
    if (!isOperation() && !isMultiply()) {
        updateDisplay("*");
    }
});
clear_all.addEventListener("click", function () {
    display.textContent = "";
    result.textContent = "0";
});
clear.addEventListener("click", function () {
    var _a;
    display.textContent = (_a = display.textContent) === null || _a === void 0 ? void 0 : _a.slice(0, -1);
    if (display.textContent != "") {
        result.textContent = eval(display.textContent);
    }
    else {
        result.textContent = "0";
    }
});
numbers.forEach(function (button) {
    button.addEventListener("click", function () {
        updateDisplay(button.textContent);
    });
});
equals.addEventListener("click", function () {
    display.textContent = eval(display.textContent);
});
dot.addEventListener("click", function () {
    var dotver = display.textContent.replaceAll('*', '$').replaceAll('-', '$').replaceAll('+', '$').replaceAll("/", '$').split('$');
    var numberIncludesDot = dotver[dotver.length - 1].includes(".");
    console.log(numberIncludesDot);
    if (!numberIncludesDot) {
        display.textContent += ".";
    }
});
function isOperation() {
    var _a, _b;
    if (((_a = display.textContent) === null || _a === void 0 ? void 0 : _a.slice(-1)) === "+") {
        return true;
    }
    else if (((_b = display.textContent) === null || _b === void 0 ? void 0 : _b.slice(-1)) === "-") {
        return true;
    }
    else if (display.textContent === "") {
        return true;
    }
    else
        return false;
}
function isMultiply() {
    var _a, _b;
    if (((_a = display.textContent) === null || _a === void 0 ? void 0 : _a.slice(-1)) === "/") {
        return true;
    }
    else if (((_b = display.textContent) === null || _b === void 0 ? void 0 : _b.slice(-1)) === "*") {
        return true;
    }
    else
        return false;
}
function updateDisplay(digit) {
    display.textContent += digit;
    result.textContent = "= ".concat(eval(display.textContent));
}
