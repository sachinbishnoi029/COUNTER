let button = document.querySelector(".btn")
let p = document.querySelector(".para")

button.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
})