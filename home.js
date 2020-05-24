document.addEventListener('DOMContentLoaded',()=>{
    console.log("dom loaded")
    addTitle()

})

function addTitle(){
    let div = document.querySelector("#root")
let message = document.createElement("h1")
message.innerText = "Welcome to BattlrJS"
div.appendChild(message)
}