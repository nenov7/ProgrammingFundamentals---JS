function account(input) {
    let total = 0;

    for (index = 0; index < input.length; index++) {

        let currentInput = input[index];
        if (currentInput === "NoMoreMoney") {
            break;
        }
        let moneyIn = Number(currentInput);
        if (moneyIn < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            total += moneyIn;
            console.log(`Increase: ${moneyIn.toFixed(2)}`)
        }
    }
    console.log(`Total: ${total.toFixed(2)}`);


}
account(["120",
"45.55",
"-150"])



    ;
