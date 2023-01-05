function skiTrip(input){

// •	Първи ред - дни за престой - цяло число в интервала [0...365]
// •	Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
// •	Трети ред - оценка - "positive"  или "negative"

let daysCount = Number(input[0]);
let roomType = input[1]
let review = input[2];

let nightsCount = daysCount -1;

// 	"room for one person" – 18.00 лв за нощувка
// 	"apartment" – 25.00 лв за нощувка 
// 	"president apartment" – 35.00 лв за нощувка

let roomPrice = 18 * nightsCount;
let apartmentPrice = 25 * nightsCount;
let presidentApartmentPrice = 35 * nightsCount;

let price;

if(roomType === "room for one person"){
    price = roomPrice;
}

if(roomType === "apartment"){
    if(nightsCount<10){
        price = apartmentPrice - apartmentPrice * 0.3;
    } else if(nightsCount <=15){
        price = apartmentPrice - apartmentPrice * 0.35;
    } else {
        price = apartmentPrice - apartmentPrice * 0.5;
    }
} else if(roomType === "president apartment"){
    if(nightsCount<10){
        price = presidentApartmentPrice - presidentApartmentPrice * 0.1;
    } else if(nightsCount <=15){
        price = presidentApartmentPrice - presidentApartmentPrice * 0.15;
    } else {
        price = presidentApartmentPrice - presidentApartmentPrice * 0.2;
    }
}

if(review === "positive"){
    price = price + price *0.25;
} else {
    price = price - price * 0.1;
}

console.log(price.toFixed(2));


}
skiTrip(["2",
"apartment",
"positive"])


;