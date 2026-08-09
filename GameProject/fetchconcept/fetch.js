const dropdown = document.querySelectorAll(".dropdown select");
let btn = document.getElementById("btn");
let baseurl = "https://api.frankfurter.dev/v1/latest?";
const output = document.getElementById("output");
const from = document.querySelector(".from select")
const to = document.querySelector(".to select");

let i=0;
for(let select of dropdown){
    for(currcode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value=currcode;
        if(select.name ==="from" && currcode ==="USD"){
            newOption.selected="selected";
        }else if(select.name ==="to" && currcode ==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })
    
}

const updateflag = (element)=>{
    let currcode = element.value;
    let countrycode =countryList[currcode];
    let newSrc = `https://flagfeed.com/country/${countrycode}`;
    let img =element.parentElement.querySelector("img");
    img.src = newSrc;
}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let value = amount.value;
    if(value === "" || value < 1 ){
        value = 1;
        amount.value = "1";
    }
    const url = `${baseurl}from=${from.value}&to=${to.value}&amount=${value}`;
    // fetch conversion and log result
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            try{
                const rate = data.rates[to.value];
                output.innerText= value+from.value+" = "+rate+to.value;
            }
            catch(error){
                console.log("country not available");
            }
            })
            .catch(err=>console.error(err));
    });