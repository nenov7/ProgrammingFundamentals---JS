function fishingBoat (input){

let budget = Number(input[0]);
let season = input[1];
let fishermenCount = Number(input[2]);

let price = 0;


if(season === "Spring"){
    price = 3000;
} else if(season === "Summer" || season === "Autumn"){
    price = 4200;
} else{
    price = 2600;
}

if(fishermenCount <=6){
    price*=0.9;
}else if(fishermenCount <=11){
    price*=0.85
}else{
    price *= 0.75
}

if(fishermenCount % 2 === 0 && season!= "Autumn"){
    price *=0.95;
}

if(budget >= price){
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
} else {
    console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
}

}
fishingBoat(["3600",
"Autumn",
"6"])



;