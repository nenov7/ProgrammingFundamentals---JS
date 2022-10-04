function newHouse(input){

let flowerType = input[0];
let flowerCount = Number(input[1]);
let budget = Number(input[2]);

let rosesPrice = 5 * flowerCount;
let dahliasPrice = 3.8 * flowerCount;
let tulipsPrice = 2.8 * flowerCount;
let narcissusPrice = 3 * flowerCount;
let gladiolusPrice = 2.5 * flowerCount;

let price = 0;

if(flowerType === "Roses" && flowerCount > 80 ){
    price = rosesPrice - rosesPrice * 0.1;
} else if(flowerType === "Roses" && flowerCount <= 80)
{price = rosesPrice};


if(flowerType === "Dahlias" && flowerCount > 90){
    price = dahliasPrice - dahliasPrice * 0.15;
} else if(flowerType === "Dahlias" && flowerCount <= 90)
{price = dahliasPrice};

if(flowerType === "Tulips" && flowerCount > 80){
   price = tulipsPrice - tulipsPrice *0.15;
} else if(flowerType === "Tulips" && flowerCount <= 80)
{price = tulipsPrice};

if(flowerType === "Narcissus" && flowerCount < 120){
    price = narcissusPrice + (narcissusPrice * 0.15)
} else if(flowerType === "Narcissus" && flowerCount >= 120)
{price = narcissusPrice};

if(flowerType === "Gladiolus" && flowerCount < 80){
    price = gladiolusPrice + (gladiolusPrice * 0.2)
} else if(flowerType === "Gladiolus" && flowerCount >= 80)
{price = gladiolusPrice};    


if(budget >= price){
    console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`)
} else{
    console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
}


}
newHouse(["Narcissus",
"119",
"360"])


