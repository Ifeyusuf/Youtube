// EXPAND SEARCH BAR

const inputs= document.querySelector(".input");

const positioning= document.querySelector(".positioning-icon");
inputs.addEventListener("click", () => {
    positioning.style.display= "block"
})

window.addEventListener("mousedown", (e) =>{
    if(e.target !== inputs){
        positioning.style.display= "none"
    }
})

// DARK MODE
const round= document.querySelectorAll(".round");
const bodys= document.querySelector(".body");

round.forEach( (rounds)=>{
    rounds.addEventListener("click", ()=>{
        bodys.classList.toggle("dark")
    
    })
})

// SIDEBAR
const navLists= document.querySelector(".nav-fixed");
const menus= document.querySelector(".pc-bars");

menus.addEventListener("click", ()=>{
        
    if(navLists.classList.contains("visible")){
        navLists.classList.remove("visible")
    }
    
    else{
        navLists.classList.add("visible")
    }
})

menus.addEventListener("click", function changes() {
    if(menus.classList.contains("change")){
        menus.classList.remove("change");
    }
    else{
        menus.classList.add("change")
    }
})

// MOBILE SIDEBAR ONLY
const bars= document.querySelectorAll("#bars");
const navMobile= document.querySelector(".nav-sm-fixed");

bars.forEach( (barSm)=>{

    barSm.addEventListener ("click", () => {

        if(navMobile.classList.contains("show-sm")){
            navMobile.classList.remove("show-sm")
            bodyC.style.visibility= "hidden"
        }
        else{
            navMobile.classList.add("show-sm")
            bodyC.style.visibility= "visible"
        }

        // if(navMobile.classList.contains("show-sm")){
        //     bodyC.style.visibility= "visible"
        // }
    })
})

// WINDOW REMOVE M-SIDEBAR
let bodyC= document.querySelector(".bodys");
let cols= document.querySelectorAll(".closeNav");

cols.forEach ( (col) =>{

    col.addEventListener("mousedown", (e)=> {

        if(e.target !== navMobile){
            navMobile.classList.remove("show-sm")
        }
        if(e.target !== navMobile){
            bodyC.style.visibility= "hidden"
        }
        
    })
})


// SEARCH MOVIES

let searchVideos= document.querySelectorAll("#search-videos");
let inputId=document.querySelector("#input")

inputs.addEventListener("keyup", ()=>{
    let inputsValue= inputs.value;

    for(let i=0; i < searchVideos.length; i++){

        if(! searchVideos[i].innerHTML.toLocaleLowerCase().includes(inputsValue)){
            searchVideos[i].style.display= "none"
        }

        else{
            searchVideos[i].style.display= "block"
        }
    }
})

// MOBILE SEARCH BAR
const searchM= document.getElementById("search-icon-mobile");
const tops= document.querySelector(".top");
const arrowClose= document.querySelector(".arrow");

searchM.addEventListener("click", ()=>{
    tops.classList.add("show-mobile-search")
})

arrowClose.addEventListener("click", ()=>{
    tops.classList.remove("show-mobile-search")
})

let searchVideo= document.querySelectorAll("#search-videos");
let inputM=document.querySelector("#inputs")

inputM.addEventListener("keyup", ()=>{
    let inputsValue= inputM.value;

    for(let i=0; i < searchVideo.length; i++){

        if(! searchVideo[i].innerHTML.toLocaleLowerCase().includes(inputsValue)){
            searchVideo[i].style.display= "none"
        }

        else{
            searchVideo[i].style.display= "block"
        }
    }
})
window.addEventListener("mousedown", (e)=>{
    
    if( e.target !== inputM){
        tops.classList.remove("show-mobile-search")
    }
})



// FOOTER YEAR
let spans= document.querySelector("#year");

const futureYear=new Date();
const years=futureYear.getFullYear();

spans.innerHTML= years;

// NEXT WITH ICONS
const next= document.querySelector(".next");
const prev= document.querySelector(".prev");
let sizes= document.querySelector(".length");

next.addEventListener("click", ()=>{
    sizes.scrollLeft +=30
})

prev.addEventListener("click", ()=>{
    sizes.scrollLeft -=30
})