function godzilla(input){

let filmBudget = Number(input[0]);
let statistCount = Number(input[1]);
let priceForStatistDress = Number(input[2]);

// •	Декорът за филма е на стойност 10% от бюджета. 
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
let priceStatist = statistCount * priceForStatistDress;
let decorPrice = filmBudget * 0.10;

if(statistCount>150){
    priceStatist *= 0.9;
}

let decorAndDressPrice = priceStatist + decorPrice;

if(decorAndDressPrice>filmBudget){
    console.log(`Not enough money!`)
    console.log(`Wingard needs ${(decorAndDressPrice - filmBudget).toFixed(2)} leva more.`)
} else{
console.log(`Action!`)
console.log(`Wingard starts filming with ${(filmBudget - decorAndDressPrice).toFixed(2)} leva left.`)
}




}

godzilla(["15437.62",
"186",
"57.99"])

;
