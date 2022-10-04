function toyShop(input){

    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = puzzleCount * 2.60;
    let dollsPrice = dollsCount * 3.00;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2.00;

    let toysCount = puzzleCount + dollsCount +bearsCount +minionsCount +trucksCount;
    let toysPrice = puzzlePrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;

    if(toysCount >= 50){
        toysPrice *= 0.75;
    }
    let rent = 0.10 * toysPrice;

    toysPrice -= rent;

    // •	Ако парите са достатъчни се отпечатва:
    // o	"Yes! {оставащите пари} lv left."
    // •	Ако парите НЕ са достатъчни се отпечатва:
    // o	"Not enough money! {недостигащите пари} lv needed."

    if(toysPrice >= tripPrice){
        console.log(`Yes! ${(toysPrice - tripPrice).toFixed(2)} lv left.`)
    } else{
        console.log(`Not enough money! ${(tripPrice - toysPrice).toFixed(2)} lv needed.`)
    }
    
    

}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])


;