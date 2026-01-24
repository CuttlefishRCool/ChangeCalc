// Write your JavaScript here

function getChange(e) {
var give = document.getElementById('amount-received').value;
var take = document.getElementById('amount-due').value;
document.getElementById("amount-remaining").textContent = '';

//initialize temp variables
var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;
var dollars = 0;
// grab a result from the amount given - amount due
var result = give - take;
// use Math.round to get the dollars



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
    } else if ((Math.floor(result * 100) / 100) >= .01){
        pennies++;
        result-= .01;
    } else { 
        if(result > 0.00){
        document.getElementById("amount-remaining").textContent = "You'll lose " + result + "!";
        } 
        break; }
}   
    document.getElementById("dollars-output").textContent = dollars;
    document.getElementById("quarters-output").textContent = quarters;
    document.getElementById("dimes-output").textContent = dimes;
    document.getElementById("nickels-output").textContent = nickels;
    document.getElementById("pennies-output").textContent = pennies;
}
 $.getJSON('currencies.json', function(currencies) {
    const sel = document.getElementById('currencies');
    currencies.forEach(currenc => {
        var option = document.createElement("option");
        option.value = currenc.exRate;
        option.textContent = currenc.Currency;

        sel.appendChild(option);
    });
 });
function getExchange(e){
let selectedC = document.getElementById('currencies').value;
let amountH = document.getElementById('amount-have').value;
let dolla = amountH * selectedC;
document.getElementById('amount-received').value = dolla;
document.getElementById('amount-due').value = 0;
getChange();
}
// write a button that initiates getChange function
document.getElementById("calculate-change").onclick = getChange;
document.getElementById("calculate-rate").onclick = getExchange;