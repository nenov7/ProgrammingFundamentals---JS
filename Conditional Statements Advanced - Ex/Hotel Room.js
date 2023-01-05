function hotel(input){

let month = input[0];
let nightsCount = Number(input[1]);

let studioPrice = 0;
let apartmentPrice = 0;

if(month === "May" || month === "October"){
    studioPrice = 50 * nightsCount;
    apartmentPrice = 65 * nightsCount;
} else if(month === "June" || month === "September"){
    studioPrice = 75.20 * nightsCount;
    apartmentPrice = 68.70 * nightsCount;
} else {
    studioPrice = 76 * nightsCount;
    apartmentPrice = 77 * nightsCount;
}

// •	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
// •	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
// •	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
// •	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.

if((month === "May" || month === "October") && nightsCount <=14 && nightsCount >7){
    studioPrice *= 0.95;
} else if ((month === "May" || month === "October") && nightsCount > 14){
    studioPrice *= 0.7;
} else if((month === "June" || month === "September") && nightsCount > 14){
    studioPrice *= 0.8;
}

if(nightsCount > 14){
    apartmentPrice *= 0.9;
}

// •	На първия ред: “Apartment: {цена за целият престой} lv.”
// •	На втория ред: “Studio: {цена за целият престой} lv.”

console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`)
console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`)

}
hotel(["August",
"20"])


;