let buttonDOM = document.querySelector("#btn")  

let label = 0

buttonDOM.innerHTML = label;

buttonDOM.addEventListener('click', buttonHandler)

function buttonHandler() {
    label++
    buttonDOM.innerHTML = label
}