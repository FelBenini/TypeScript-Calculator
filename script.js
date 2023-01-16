var hello = "mai god";
var test = document.getElementById("test");
var highfive = 1;
console.log(hello);
test.addEventListener("click", function () {
    highfive += 1;
    test.textContent = "Hey guys ".concat(highfive);
});
