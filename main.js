// Write your JavaScript here

function getChange(e) {
var give = document.getElementById('amount-received').value;
var take = document.getElementById('amount-due').value;


//initialize temp variables
var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;
var dollars = 0;
// grab a result from the amount given - amount due
var result = give - take;
// use Math.round to get the dollars

document.getElementById("test").textContent = result;

// use divide of coin value and round
while(result > 0){
    if (result >= 1.00){
        dollars++;
        result-= 1.00;
    } else if (result.toFixed(2) >= .25){
        quarters++;
        result-= .25;
    } else if (result.toFixed(2) >= .10){
        dimes++;
        result-= .10;
    } else if (result.toFixed(2) >= .05){
        nickels++;
        result-= .05;
    } else if (result.toFixed(2) >= .01){
        pennies++;
        result-= .01;
    } else { break; }
}   
    document.getElementById("dollars-output").textContent = dollars;
    document.getElementById("quarters-output").textContent = quarters;
    document.getElementById("dimes-output").textContent = dimes;
    document.getElementById("nickels-output").textContent = nickels;
    document.getElementById("pennies-output").textContent = pennies;
}
// write a button that initiates getChange function
document.getElementById("calculate-change").onclick = getChange;