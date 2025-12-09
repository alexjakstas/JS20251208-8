"use strict";

const runnersCount = +prompt("Kiek dalyvavo bėgigų: ");

let runnersArray = [];
let sum = 0;

for (let i = 1; i <= runnersCount; i++){
    const runTime = +prompt(`Įveskite ${i} bėgiko laiką: `);
    if(runTime > 0){
        runnersArray.push(runTime);
    }

}

for (let index = 0; index < runnersArray.length; index++){
    sum +=runnersArray[index];
}

const average = Math.floor(sum / runnersCount);
const bestTime = Math.min(...runnersArray);
const fasterThen =  average - bestTime;


document.getElementById("bestTime").innerHTML = bestTime;
document.getElementById("fasterThen").innerHTML = fasterThen;
