const hello : string = "mai god";
const test : HTMLElement = document.getElementById("test")!
let highfive : number = 1;
console.log(hello)

test.addEventListener("click", function() {
    highfive += 1
    test.textContent = `Hey guys ${highfive}`
})