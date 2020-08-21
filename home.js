document.addEventListener('DOMContentLoaded',()=>{
    fightPage()
    mobsPage()
    monstPage()
    aboutPage()
   

})

let mobHealthMax = 0
let mobHealthCurrent = 0
let mobStr = 0
let mobCon = 0 
let monstHealthMax = 0
let monstHealthCurrent = 0
let monstStr = 0
let monstCon = 0 
var monster = {}
var interval = "empty"
var seconds = 5000
var door = 1
var startDiv = document.createElement("div")
startDiv.id = "startDiv"


function fightPage(){
    var ftbtn = document.querySelector("#fightbtn")
    var ftBtn = document.querySelector("#fightBtn")

    ftbtn.classList.add("underline")
    ftbtn.addEventListener('click', loadDoor)
    ftBtn.addEventListener('click', loadDoor)
}
 function loadDoor(){
     var page = document.querySelector("#page")
     page.innerHTML = ""
     var span = document.createElement("span")
     span.classList.add("center","door")
     var doorInput = document.createElement("input")
     doorInput.placeholder = "Choose a door 1 or 2"
     doorInput.id = "door"
     var doorSubmit = document.createElement("button")
     doorSubmit.innerText = "enter door"
     doorSubmit.addEventListener("click",handleDoor)
     span.appendChild(doorInput)
     span.appendChild(doorSubmit)
     page.appendChild(span)
 }
 function handleDoor(){
     var input = document.querySelector("#door")
     if(input.value === "1"){
        door = parseInt(input.value)
        loadFight()
     }else if(input.value === "2"){
        loadFight()
     }else if(input.value === "one"){
        door = 1
        loadFight()
    }else if(input.value === "two"){
        door = 2
        loadFight()
    }else if(input.value === ""){
         alert("try again")
     }else if(input !== ""){
         alert(`you said ${input.value} but thats not the way out`)
     }
     
     
 }
function fetchRandomMonst(){
    fetch("https://battlrbe.herokuapp.com/monstrandom")
    .then(response=> response.json())
    .then(monst => renderMonst(monst))
}
function loadFight(){
    if(door === 1){
    var page = document.querySelector("#page")
    page.innerHTML = ""
    var fth1 = document.createElement("h1")
    fth1.innerText = "Fight"
    fth1.classList.add("text-center")
    page.appendChild(fth1)
    var mobSpan = document.createElement("span")
    mobSpan.classList.add("float-left")
    var mobDiv = document.createElement("span")
    mobSpan.appendChild(mobDiv)
    mobDiv.id = "mobDiv"
    mobDiv.classList.add("card-mob-fight")
    selectDiv = document.createElement("div")
    selectDiv.classList.add("float-left","mob-select")
    mobSelect = document.createElement("select")
    mobSelect.id = "mobSelect"
    mobSelect.addEventListener("change",renderSelectMob)
    var diffSpan = document.createElement("span")
    page.appendChild(selectDiv)
    page.appendChild(diffSpan)
    var selectBrake = document.createElement("br")
    page.appendChild(selectBrake)
    var selectBrake2 = document.createElement("br")
    page.appendChild(selectBrake2)
    page.appendChild(mobSpan)
    dummyOption = document.createElement("option")
    dummyOption.innerText = "Select Mob"
    dummyOption.value = ""
    dummyOption.disable = true
    mobSelect.appendChild(dummyOption)
    selectDiv.appendChild(mobSelect)
    fetch("https://battlrbe.herokuapp.com/mobs")
    .then(response => response.json())
    .then(mobArray => {
        mobArray.forEach(mob => {renderMobSelect(mob)})
    })
    
    
    var difficultySelect = document.createElement("select")
    difficultySelect.id = "diff-select"
    var diffDummy = document.createElement("option")
    diffDummy.innerText = "select"
    diffDummy.value = "5000"
    difficultySelect.appendChild(diffDummy)
    var easy = document.createElement("option")
    easy.innerText = "easy"
    easy.value = "10000"
    difficultySelect.appendChild(easy)
    var normal = document.createElement("option")
    normal.innerText = "normal"
    normal.value = "5000"
    difficultySelect.appendChild(normal)
    var hard = document.createElement("option")
    hard.innerText = "hard"
    hard.value = "2500"
    difficultySelect.appendChild(hard)
    difficultySelect.addEventListener("change",difficulty)
    diffSpan.classList.add("difficulty-select","float-right")
    var diffP = document.createElement("p")
    diffP.innerText = "DIFFICULTY MODE"
    diffSpan.appendChild(diffP)
    diffSpan.appendChild(difficultySelect)
    var monstDiv = document.createElement("span")

    var monstSpan = document.createElement("span")
    monstSpan.classList.add("float-right")
    monstSpan.appendChild(monstDiv)
    monstDiv.id = "monstDiv"
    monstDiv.classList.add("card-monst-fight")
    
    page.appendChild(monstSpan)

    var messageSpan = document.createElement("span")
    var message = document.createElement("span")
    messageSpan.appendChild(message)
    message.id = "message"
    message.classList.add("fight-message-box")
    message.innerText = "Select Difficulty mode then select a mob"
    page.appendChild(message)
    fetchRandomMonst()}else if (door === 2){
        var page = document.querySelector("#page")
    page.innerHTML = ""
    var fth1 = document.createElement("h1")
    fth1.innerText = "Fight"
    fth1.classList.add("text-center")
    page.appendChild(fth1)
    var mobSpan = document.createElement("span")
    mobSpan.classList.add("float-left")
    var mobDiv = document.createElement("span")
    mobSpan.appendChild(mobDiv)
    mobDiv.id = "mobDiv"
    mobDiv.classList.add("card-mob-fight")
    selectDiv = document.createElement("span")
    selectDiv.classList.add("float-left","mob-select")
    mobSelect = document.createElement("select")
    mobSelect.id = "mobSelect"
    mobSelect.addEventListener("change",renderSelectMob)
    var diffSpan = document.createElement("span")
    page.appendChild(selectDiv)
    page.appendChild(diffSpan)
    var selectBrake = document.createElement("br")
    page.appendChild(selectBrake)
    var selectBrake2 = document.createElement("br")
    page.appendChild(selectBrake2)
    page.appendChild(mobSpan)
    dummyOption = document.createElement("option")
    dummyOption.innerText = "Select Mob"
    dummyOption.value = ""
    dummyOption.disable = true
    mobSelect.appendChild(dummyOption)
    selectDiv.appendChild(mobSelect)
    fetch("https://battlrbe.herokuapp.com/mobs")
    .then(response => response.json())
    .then(mobArray => {
        mobArray.forEach(mob => {renderMobSelect(mob)})
    })
    
    
    var difficultySelect = document.createElement("select")
    difficultySelect.id = "diff-select"
    var diffDummy = document.createElement("option")
    diffDummy.innerText = "select"
    diffDummy.value = "5000"
    difficultySelect.appendChild(diffDummy)
    var easy = document.createElement("option")
    easy.innerText = "easy"
    easy.value = "8000"
    difficultySelect.appendChild(easy)
    var normal = document.createElement("option")
    normal.innerText = "normal"
    normal.value = "4000"
    difficultySelect.appendChild(normal)
    var hard = document.createElement("option")
    hard.innerText = "hard"
    hard.value = "2500"
    difficultySelect.appendChild(hard)
    difficultySelect.addEventListener("change",difficulty)
    diffSpan.classList.add("difficulty-select","float-right")
    var diffP = document.createElement("p")
    diffP.innerText = "DIFFICULTY MODE"
    diffSpan.appendChild(diffP)
    diffSpan.appendChild(difficultySelect)
    diffSpan.classList.add("#float-right")
    selectDiv.appendChild(diffSpan)

    var monstDiv = document.createElement("span")

    var monstSpan = document.createElement("span")
    monstSpan.classList.add("float-right")
    monstSpan.appendChild(monstDiv)
    monstDiv.id = "monstDiv"
    monstDiv.classList.add("card-monst-fight")
    
    page.appendChild(monstSpan)

    var messageSpan = document.createElement("span")
    var message = document.createElement("span")
    messageSpan.appendChild(message)
    message.id = "message"
    message.classList.add("fight-message-box")
    message.innerText = "Select Difficulty mode then select a mob"
    page.appendChild(message)
    fetchRandomMonst()}
    }

    
    
   


function difficulty(e){
    var diff = ""
     if(e.target.value === "8000"){
        diff = "easy"
    }else if(e.target.value === "4000"){
        diff = "normal"
    }else if(e.target.value === "2500"){
        diff = "hard"
    }


    var text = document.querySelector("#message")
    text.innerText = `Difficulty changed to ${diff}`
}


function renderMonst(monst){
    monster=monst
    monstHealthMax = monst.hp
    monstHealthCurrent = monst.hp
    monstStr = monst.str
    monstCon = monst.con
    let monstDiv = document.querySelector("#monstDiv")
    monstDiv.innerHTML = ""
    let monstHealthBar = document.createElement("progress")
    monstHealthBar.max = `${monstHealthMax}`
    monstHealthBar.value = `${monstHealthCurrent}`
    monstHealthBar.id = "monstHealthBar"
    monstDiv.appendChild(monstHealthBar)
    var monstBrake = document.createElement("br")
    monstDiv.appendChild(monstBrake)
    let monstImg = document.createElement("img")
    monstImg.classList.add("image")
    monstImg.id = "monstImg"
    monstImg.alt = "monst"
    monstImg.src =monst.img
    monstDiv.appendChild(monstImg)
    var monstName = document.createElement("h3")
   monstName.innerText = monst.name
   monstDiv.appendChild(monstName)

   var monstDesc = document.createElement("p")
   monstDesc.innerText = monst.desc
   monstDiv.appendChild(monstDesc)
   
}

function renderSelectMob(event){
   let mobDiv = document.querySelector("#mobDiv")
    mobDiv.innerHTML = "" 
    fetch(`https://battlrbe.herokuapp.com/mobs/${event.target.value}`)
    .then(response=>response.json())
    .then(mob=> renderMobFight(mob))


}

function renderMobFight(mob){
    mobHealthMax = mob.hp
    mobHealthCurrent = mob.hp
    mobStr = mob.str/100
    mobCon = mob.con/100
   let mobDiv = document.querySelector("#mobDiv")
   mobDiv.innerHTML = ""
   let mobHealthBar = document.createElement("progress")
   mobHealthBar.max = mobHealthMax
   mobHealthBar.value = mobHealthCurrent
   mobHealthBar.id = "mobHealthBar"
   mobDiv.appendChild(mobHealthBar)
   let mobBrake = document.createElement("br")
   mobDiv.appendChild(mobBrake)
    let mobImg = document.createElement("img")
    mobImg.classList.add("image")
    mobImg.id = "mobImg"
    mobImg.alt = "mob"
    mobImg.src =mob.img
    mobDiv.appendChild(mobImg)
    var mobname = document.createElement("h3")
   mobname.innerText = mob.name
   mobDiv.appendChild(mobname)
   

   var mobdesc = document.createElement("h4")
   mobdesc.innerText = mob.desc
   mobDiv.appendChild(mobdesc)
   let attackH3 = document.createElement("h3")
   attackH3.innerText = "Attacks"
   mobDiv.appendChild(attackH3)
   mob.moves.forEach(move => {
     let button = document.createElement("button")
     button.type = "button"
     button.innerText = move.name
     button.value = move.power
     button.addEventListener("click",mobDamage)
     mobDiv.appendChild(button)
   })
   var select = document.querySelector("#mobSelect")
   select.disabled = true
   var diffSelect1 = document.querySelector("#diff-select")
   diffSelect1.disabled = true
   var page = document.querySelector("#page")
   var startBr = document.createElement("br")
   page.appendChild(startBr)
   page.appendChild(startDiv)
   var startButton = document.createElement("button")
   startButton.innerText = "START!!!"
   startButton.addEventListener("click", fight)
   startDiv.appendChild(startButton)
   
}

function monstDamage(){
    let move = monster.moves[Math.floor ( Math.random() * monster.moves.length )]
    let mobHealthBar = document.querySelector("#mobHealthBar")
    let attack = move.power
    let damagePercent = attack*monstStr
    let damage = attack + damagePercent 
    var message = document.querySelector("#message")
    var monstImg = document.querySelector("#monstImg")
    monstImg.classList.add("animate__animated","animate__swing")
    setTimeout(mobAniHit, 500)
    mobHealthCurrent = mobHealthCurrent - damage
    mobHealthBar.value = `${mobHealthCurrent}`
    message.innerHTML = `${move.name} did---${damage} damage`
    if(mobHealthCurrent<0){
    clearInterval(interval)
    message.innerHTML = `--MOB DEFEATED--<br>Select a new mob!!!!`
    var select = document.querySelector("#mobSelect")
    select.disabled = false
    var diffSelect = document.querySelector("#diff-select")
    diffSelect.disabled = false
    var mobDiv = document.querySelector("#mobDiv")
    mobDiv.innerHTML = ""
    }
   
    setTimeout(monstAni,1000)
    
}
function mobAniHit(){
    var mobImg = document.querySelector("#mobImg")
    mobImg.classList.add("animate__animated","animate__wobble")
}
function monstAni(){
    var img = document.querySelector("#monstImg")
    img.classList.remove("animate__animated","animate__swing")
    var mobImg = document.querySelector("#mobImg")
    mobImg.classList.remove("animate__animated","animate__wobble")
}
var monstDamageGo = function monstDamageGoOn(){
    setInterval(monstDamage, 5000)
}
function fight(){
    var startDiv = document.querySelector("#startDiv")
    startDiv.innerHTML = ""
    interval = setInterval(monstDamage, seconds)
    
}
function mobDamage(event){
    let monstHealthBar = document.querySelector("#monstHealthBar")
    let attack = parseInt(event.target.value)
    let damagePercent = attack*mobStr
    let damage = attack + damagePercent 
    var message = document.querySelector("#message")
    monstHealthCurrent = monstHealthCurrent - damage
    monstHealthBar.value = `${monstHealthCurrent}`
   
    message.innerHTML = `${event.target.innerText+" did---"+damage+" damage"}`
    var select = document.querySelector("#mobSelect")
    var img = document.querySelector("#mobImg")
    img.classList.add("animate__animated","animate__swing")
    setTimeout(monstAniHit, 500)
    if(monstHealthCurrent>0)
   {
       select.disabled = true
        }else{
            clearInterval(interval)
            message.innerText = "+++MONST DEFEATED+++"
            select.disabled = false
            fetchRandomMonst()
            fight()
        }
        setTimeout(mobAni,1000)
  
}
function monstAniHit(){
    var monstImg = document.querySelector("#monstImg")
    monstImg.classList.add("animate__animated","animate__wobble")
}
function mobAni(){
    var img = document.querySelector("#mobImg")
    img.classList.remove("animate__animated","animate__swing")
    var monstImg = document.querySelector("#monstImg")
    monstImg.classList.remove("animate__animated","animate__wobble")

}

function renderMobSelect(mob){
    mobSelect = document.querySelector("#mobSelect")
    mobOption = document.createElement("option")
    mobOption.id = `mob-${mob.id}`
    mobOption.innerText = `${mob.name}`
    mobOption.value = `${mob.id}`
    mobSelect.appendChild(mobOption)

}
function mobsPage(){
    var ftbtn = document.querySelector("#mobsbtn")
    ftbtn.addEventListener('click',loadMobs)
}

function loadMobs(){
    var page = document.querySelector("#page")
    page.innerHTML = ""
    var fth2 = document.createElement("h2")
    fth2.innerText = "Playable Mobs"
    fth2.classList.add("text-center")
    page.appendChild(fth2)
    fetch("https://battlrbe.herokuapp.com/mobs")
    .then(response => response.json())
    .then(mobArray => {
        mobArray.forEach(mob => {renderMob(mob)})
    })

}
function renderMob(mob){
   
   var page = document.querySelector("#page")

   var mobdiv = document.createElement("div")
   mobdiv.classList.add("card","center")

   var mobimg = document.createElement("img")
   mobimg.src = mob.img
   mobimg.classList.add("image")
   mobdiv.appendChild(mobimg)


   var mobname = document.createElement("h3")
   mobname.innerText = mob.name
   mobdiv.appendChild(mobname)

   var mobdesc = document.createElement("h4")
   mobdesc.innerText = mob.desc
   mobdiv.appendChild(mobdesc)

   var mobul = document.createElement("ul")
   var mobhp = document.createElement("li")
   var mobstr = document.createElement("li")
   var mobcon = document.createElement("li")
   mobhp.innerText = `HP:${mob.hp}`
   mobul.appendChild(mobhp)
   mobstr.innerText = `STR:${mob.str}`
   mobul.appendChild(mobstr)
   mobcon.innerText = `CON:${mob.con}`
   mobul.appendChild(mobcon)
   mobdiv.appendChild(mobul)

 
   page.appendChild(mobdiv)
   
}

function monstPage(){
    var ftbtn = document.querySelector("#monstbtn")
    ftbtn.addEventListener('click',loadMonst)
}

function loadMonst(){
    console.log("testing from monst")
    var page = document.querySelector("#page")
    page.innerHTML = ""
    var fth1 = document.createElement("h1")
    fth1.innerText = "Monst"
    page.appendChild(fth1)
    fetch("http://battlrbe.herokuapp.com/monst")
    .then(res => res.json())
    .then(monsts => monsts.forEach(monst=> {renderMonstPage(monst)}))

}

function renderMonstPage(monst){
    var page = document.querySelector("#page")

    var monstdiv = document.createElement("div")
    monstdiv.classList.add("card","center")
 
    var monstimg = document.createElement("img")
    monstimg.src = monst.img
    monstimg.classList.add("image")
    monstdiv.appendChild(monstimg)
 
 
    var monstname = document.createElement("h3")
    monstname.innerText = monst.name
    monstdiv.appendChild(monstname)
 
    var monstdesc = document.createElement("h4")
    monstdesc.innerText = monst.desc
    monstdiv.appendChild(monstdesc)
 
    var monstul = document.createElement("ul")
    var monsthp = document.createElement("li")
    var monststr = document.createElement("li")
    var monstcon = document.createElement("li")
    monsthp.innerText = `HP:${monst.hp}`
    monstul.appendChild(monsthp)
    monststr.innerText = `STR:${monst.str}`
    monstul.appendChild(monststr)
    monstcon.innerText = `CON:${monst.con}`
    monstul.appendChild(monstcon)
    monstdiv.appendChild(monstul)
 
  
    page.appendChild(monstdiv)
}

function aboutPage(){
    var ftbtn = document.querySelector("#aboutbtn")
    ftbtn.addEventListener('click',loadAbout)
}

function loadAbout(){
    var page = document.querySelector("#page")
    page.innerHTML = ""
    var ftp = document.createElement("p")
    ftp.innerText = "This is a Text based Fighting game. Created with Rails and Vanilla JS"
    page.appendChild(ftp)
}