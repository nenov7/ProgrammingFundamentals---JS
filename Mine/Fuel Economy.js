// среден разход
// цена на горивото
// километри

function fuelEconomy (input){

    let average = Number(input[0]);
    let fuelPrice = Number(input[1]);
    let kilometers = Number(input[2]);

    let consFor1Kilometer = average / 100;
    let consFuel = consFor1Kilometer * kilometers;

    let tripPrice = consFuel * fuelPrice;

    console.log(`Брат, тва ше ти стъпи на ${(tripPrice).toFixed(2)} парони!`)


}
fuelEconomy(["6","4","3200"]);