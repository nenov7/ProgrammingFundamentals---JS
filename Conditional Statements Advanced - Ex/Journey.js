function journey(input){
    let budget= Number(input[0]);
    let season = input[1];

    let tripType = "";
    let destination = "";
    let price = 0;

    if(season === "summer"){
        tripType = "Camp"
    } else {
        tripType = "Hotel"
    }

    if(budget <= 100){
        destination = "Bulgaria"
        if(season === "summer"){
            price = budget * 0.3;
        } else {
            price = budget * 0.7
        }
    } else if(budget <=1000){
        destination = "Balkans"
        if(season === "summer"){
            price = 0.4 * budget;
        } else {
            price = 0.8 * budget;
        }
    }else {
        destination = "Europe"
        tripType = "Hotel";
        price = 0.9 * budget;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${tripType} - ${(price).toFixed(2)}`);

}
journey(["1500", "summer"]);