function spiceMustFlow(startingYield) {
    let totalAmount = 0;
    let days = 0;
    let extracting = 26;

    if (startingYield >= 100) {
        while (startingYield >= 100) {

            totalAmount += startingYield - extracting;
            startingYield -= 10;
            days++;

        }
        if (startingYield >= extracting) {
            totalAmount -= extracting;
        }

        console.log(days);
        console.log(totalAmount);
    } else {
        console.log(days);
        console.log(totalAmount);

    }

}
spiceMustFlow(450);