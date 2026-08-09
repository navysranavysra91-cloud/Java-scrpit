const mode = document.getElementById("btn");
if (mode) {
    mode.addEventListener("click", changeMode);  // "click" not "onclick"
}
let change=true;
function changeMode(){
    if(change){
        document.body.style.backgroundColor="black";
        change=false;
    }
    else{
        document.body.style.backgroundColor="white";
        change=true;
    }
}

mode.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor="red"
})
mode.addEventListener("mouseover",()=>{
    if(change){
        alert("one click dark mode active \ndouble click red node activited");
        change=false;
    }
})
