document.addEventListener('DOMContentLoaded',()=>{
    console.log("dom loaded")
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


function fightPage(){
    var ftbtn = document.querySelector("#fightbtn")
    ftbtn.addEventListener('click',loadFight)
}

function loadFight(){
    
    var page = document.querySelector("#page")
    page.innerHTML = ""
    var fth1 = document.createElement("h1")
    fth1.innerText = "Fight"
    fth1.classList.add("fight-message")
    page.appendChild(fth1)
    var mobSpan = document.createElement("span")
    mobSpan.classList.add("float-left")
    var mobDiv = document.createElement("span")
    mobSpan.appendChild(mobDiv)
    mobDiv.id = "mobDiv"
    mobDiv.classList.add("card-mob-fight")
    selectDiv = document.createElement("div")
    selectDiv.classList.add("float-left")
    mobSelect = document.createElement("select")
    mobSelect.classList.add("select")
    mobSelect.id = "mobSelect"
    mobSelect.addEventListener("change",renderSelectMob)
    page.appendChild(selectDiv)
    page.appendChild(mobSpan)
    dummyOption = document.createElement("option")
    dummyOption.innerText = "Select Mob"
    dummyOption.value = ""
    dummyOption.disable = true
    mobSelect.appendChild(dummyOption)
    selectDiv.appendChild(mobSelect)
    fetch("http://localhost:3000/mobs")
    .then(response => response.json())
    .then(mobArray => {
        mobArray.forEach(mob => {renderMobSelect(mob)})
    })
    
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
    message.innerText = "This is where fight data goes"
    page.appendChild(message)

    fetch("http://localhost:3000/monstrandom")
    .then(response=> response.json())
    .then(monst => renderMonst(monst))


   

}

function renderMonst(monst){
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
    let monstImg = document.createElement("img")
    monstImg.classList.add("image")
    monstImg.alt = "monst"
    monstImg.src =monst.img
    monstDiv.appendChild(monstImg)
    var monstName = document.createElement("h3")
   monstName.innerText = monst.name
   monstDiv.appendChild(monstName)

   var monstDesc = document.createElement("h4")
   monstDesc.innerText = monst.desc
   monstDiv.appendChild(monstDesc)
}

function renderSelectMob(event){
   let mobDiv = document.querySelector("#mobDiv")
    mobDiv.innerHTML = "" 
    fetch(`http://localhost:3000/mobs/${event.target.value}`)
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
    let mobImg = document.createElement("img")
    mobImg.classList.add("image")
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
}
function mobDamage(event){
    let monstHealthBar = document.querySelector("#monstHealthBar")
    let attack = parseInt(event.target.value)
    let damagePercent = attack*mobStr
    let damage = attack + damagePercent 
    var message = document.querySelector("#message")
    monstHealthCurrent = monstHealthCurrent - damage
    monstHealthBar.value = `${monstHealthCurrent}`
   var messageInner = message.innerHtml
    message.innerHTML = `${messageInner}<br>${event.target.innerText+" did---"+damage+" damage"}`
  
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
    fetch("http://localhost:3000/mobs")
    .then(response => response.json())
    .then(mobArray => {
        mobArray.forEach(mob => {renderMob(mob)})
    })

}
function renderMob(mob){
    console.log(mob)
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
    var page = document.querySelector("#page")
    page.innerHTML = ""
    var fth1 = document.createElement("h1")
    fth1.innerText = "Monst"
    page.appendChild(fth1)
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