document.addEventListener('DOMContentLoaded',()=>{
    console.log("dom loaded")
    fightPage()
    mobsPage()
    monstPage()
    aboutPage()

})



function fightPage(){
    var ftbtn = document.querySelector("#fightbtn")
    ftbtn.addEventListener('click',loadFight)
}

function loadFight(){
    
    var page = document.querySelector("#page")
    page.innerHTML = ""
    var fth1 = document.createElement("h1")
    fth1.innerText = "Fight"
    page.appendChild(fth1)
    mobDiv = document.createElement("div")
    mobDiv.id = "mobDiv"
    page.appendChild(mobDiv)
    mobDiv.classList.add("float-left")
    selectDiv = document.createElement("div")
    selectDiv.classList.add("float-left")
    mobSelect = document.createElement("select")
    mobSelect.id = "mobSelect"
    mobSelect.addEventListener("change",renderSelectMob)
    page.appendChild(selectDiv)
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

}
function renderSelectMob(event){
   let mobDiv = document.querySelector("#mobDiv")
   console.log(mobDiv)
    mobDiv.innerHTML = "" 
    fetch(`http://localhost:3000/mobs/${event.target.value}`)
    .then(response=>response.json())
    .then(mob=> renderMobFight(mob))


}

function renderMobFight(mob){
   let mobDiv = document.querySelector("mobDiv")
   mobDiv.innerHTML = ""
    let mobImg = document.createElement("img")
    mobImg.alt = "mob"
    mobImg.src =mob.img
    mobDiv.appendChild(mobImg)
    var mobname = document.createElement("h3")
   mobname.innerText = mob.name
   mobdiv.appendChild(mobname)

   var mobdesc = document.createElement("h4")
   mobdesc.innerText = mob.desc
   mobdiv.appendChild(mobdesc)

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