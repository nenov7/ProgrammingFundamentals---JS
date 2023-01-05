function computerStore(inputArr){
    const customerType = inputArr.pop();
    
    let priceWithoutTaxes = 0;

    for (const price of inputArr) {
        if(Number(price) < 0){
            console.log("Invalid price!" );
        } else {
            priceWithoutTaxes+= Number(price);
        }
    }

    if(priceWithoutTaxes === 0){
        return console.log(`Invalid order!`);
    }

    let taxes = priceWithoutTaxes * 0.2;
    let totalPrice = (priceWithoutTaxes + taxes)

    if(customerType === 'special'){
        totalPrice *= 0.9;
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    
    ;