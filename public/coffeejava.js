

function submitOrder() {



const fullName = document.getElementById("fullName").value

const eMail = document.getElementById("eMail").value

const coffeeChoice = document.getElementsByName("coffeeid")
let coffee;

// console.log(coffeeChoice)

const shotsChoice = document.getElementsByName("shotsid")
let shots = "";

// console.log(shotsChoice)

const milkChoice = document.getElementsByName("milkid")
let milk;
console.log(milkChoice)
console.log(document.getElementById("milkbutton"))

for(let i = 0; i < coffeeChoice.length; i++) {
    if(coffeeChoice[i].checked === true) {
       
        coffee = coffeeChoice[i].value
        
    }
}
for(let i = 0; i < shotsChoice.length; i++) {
    console.log(shotsChoice[i])
    if(shotsChoice[i].checked === true) 
   {
        
        shots = shots + " " + shotsChoice[i].value
    }
}

for(let i = 0; i < milkChoice.length; i++) {
    if(milkChoice[i].checked === true) {
        
        milk = milkChoice[i].value
    }
}

alert(`Hi ${fullName}! Your ${coffee} with${shots} shots and ${milk} will be ready shortly! A confirmation email has been sent to ${eMail}.`)
}
