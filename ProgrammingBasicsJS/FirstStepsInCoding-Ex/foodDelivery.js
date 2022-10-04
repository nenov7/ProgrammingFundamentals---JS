function foodDelivery(input){
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veggieMenuCount = Number(input[2]);

    //•	Пилешко меню –  10.35 лв. •	Меню с риба – 12.40 лв. •	Вегетарианско меню  – 8.15 лв. 

    let chickenMenuPrice = chickenMenuCount * 10.35;
    let fishMenuPrice = fishMenuCount * 12.40;
    let veggieMenuPrice = veggieMenuCount * 8.15;
    let menusPrice = chickenMenuPrice + fishMenuPrice + veggieMenuPrice;

    //Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 

    let dessertPrice = 0.2 * menusPrice
    let menusPriceWithDessert = menusPrice + dessertPrice;

    //Цената на доставка е 2.50 лв и се начислява най-накрая.  

    let deliveryPrice = 2.50;

    let orderSum = menusPriceWithDessert + deliveryPrice;

    console.log(orderSum);


}
foodDelivery(["9 ","2 ","6 "]);