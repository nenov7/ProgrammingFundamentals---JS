function vacation(input) {

    let index = 0;
    let tripPrice = Number(input[index]);
    index++;
    let availableMoney = Number(input[index]);
    index++;

    let spendInARow = 0;
    let daysPassed = 0;

    for (let i = 2; i <= input.length; i++) {
        let action = input[index];
        index++;
        let moneyAction = Number(input[index]);
        index++;

        if (action === "spend") {
            availableMoney -= moneyAction;
            if (availableMoney - moneyAction < 0) {
                availableMoney = 0;
            }
            spendInARow++;
            daysPassed++;
        } else if (action === "save") {
            availableMoney += moneyAction;
            spendInARow = 0;
            daysPassed++;
        }

        if (spendInARow === 5) {
            console.log("You can't save the money.");
            console.log(`${daysPassed}`);
            break;
        }
        if (availableMoney >= tripPrice) {
            console.log(`You saved the money for ${daysPassed} days.`)
            break;
        }

    }

}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])


    ;