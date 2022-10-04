function shopping(input){
   
let budget = Number(input[0]);
let videoCardsCount = Number(input[1]);
let processorsCount = Number(input[2]);
let ramMemoryCount = Number(input[3]);

let videoCardPrice = 250 * videoCardsCount;
let processorPrice = 0.35 * videoCardPrice * processorsCount;
let ramMemoryPrice = 0.10 * videoCardPrice* ramMemoryCount;

let totalPrice = videoCardPrice + processorPrice + ramMemoryPrice;

if(videoCardsCount > processorsCount){
    totalPrice *= 0.85;
}

// •	Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// •	Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"

if(budget >= totalPrice){
    console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
} else {
    console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
}

}
shopping(["920.45",
"3",
"1",
"1"])

;