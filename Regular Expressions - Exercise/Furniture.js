function furniture(inputArr){
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+[\.]*[\d]*)!(?<quantity>\d+)/gm;
    let sum = 0;
    let command = inputArr.shift();
    console.log(`Bought furniture:`);

    while(command!=='Purchase'){
        let product = pattern.exec(command)
        if(product=== null){
            command = inputArr.shift();
            continue;
        }
        
        let productName = product.groups.name;
        let productPrice = Number(product.groups.price);
        let productQuantity = Number(product.groups.quantity);

        sum+= productPrice * productQuantity;
        console.log(productName);
        product = pattern.exec(command)
        command = inputArr.shift()
        
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']

);