// Name: Easton Martin
// Description: Simulate rolling dice

function toggleDieHold(id){
    // grab the data-active attribute and toggle between true and false
    let currentActiveStatus = document.getElementById(id).getAttribute("data-active");
    let newStatus = currentActiveStatus==="true"?false:true;
    document.getElementById(id).setAttribute("data-active", newStatus);
    // apply the held class accordingly
    if(newStatus){
        document.getElementById(id).classList.remove("held")
    }
    else{
        document.getElementById(id).classList.add("held")
    }
}

function rollDice(){
    // grab all active dice
    let allActiveDice = document.querySelectorAll('[data-active="true"]');
    // roll the dice and update src and alt
    for(let die of allActiveDice){
        let num = Math.floor(Math.random()*6)+1
        die.setAttribute("src", `images/${num}.png`);
        die.setAttribute("alt", `Die ${num}`);
    }
}
