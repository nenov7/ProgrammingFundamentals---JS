function solve(peopleCnt, groupType, weekDay) {
    let price = 0;
    if (groupType === "Students") {
        switch (weekDay) {
            case "Friday":
                price = 8.45 * peopleCnt;
                break;
            case "Saturday":
                price = 9.80 * peopleCnt;
                break;
            case "Sunday":
                price = 10.46 * peopleCnt;
                break;
            default:
                break;
        }
        if (peopleCnt >= 30) {
            price *= 0.85;
        }
    } else if (groupType === "Business") {
        if (peopleCnt >= 100) {
            peopleCnt = peopleCnt - 10;

        }
        switch (weekDay) {

            case "Friday":
                price = 10.90 * peopleCnt;
                break;
            case "Saturday":
                price = 15.60 * peopleCnt;
                break;
            case "Sunday":
                price = 16.00 * peopleCnt;
                break;
            default:
                break;
        }

    } else {
        switch (weekDay){
            case "Friday":
                price = 15 * peopleCnt;
                break;
            case "Saturday":
                price = 20 * peopleCnt;
                break;
            case "Sunday":
                price = 22.50 * peopleCnt;
                break;
            default:
                break;
        }
        if(peopleCnt >= 10 && peopleCnt <=20 ){
            price*=0.95;

        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);

}
solve(40,
    "Regular",
    "Saturday"
    
    );