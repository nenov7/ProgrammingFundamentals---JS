function basketball (input){
    let yearTax = Number(input[0]);

    //•	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
//•	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
//•	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
//•	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

let sneakersPrice = yearTax - (yearTax * 0.4)
let ekipPrice = sneakersPrice - (sneakersPrice * 0.2)
let ballPrice = 0.25 * ekipPrice
let accessories = 0.2 * ballPrice

let wholeSum = yearTax + sneakersPrice + ekipPrice + ballPrice + accessories;
console.log(wholeSum)


}
basketball(["550 "]);