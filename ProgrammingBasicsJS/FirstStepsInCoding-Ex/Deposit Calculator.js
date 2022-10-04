function deposit(input){
let depositedSum = Number(input[0]);
let depositTerm = Number(input[1]);
let yearPercent = Number(input[2]);

//let sum = depositedSum + depositTerm * ((depositedSum * yearPercent) / 12)

let interest = depositedSum * yearPercent / 100;
let monthInterest = interest / 12;
let sum = depositedSum + depositTerm * monthInterest;

console.log(sum);

}
deposit(["200","3","5.7"]);