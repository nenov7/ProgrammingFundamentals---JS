function storage(input){

    let storageObject = new Map();

    for (const line of input) { 
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if(storageObject.has(product)){
            let currentQty = storageObject.get(product);
            let newQty = quantity + currentQty;
            storageObject.set(product,newQty);
        } else {
            storageObject.set(product,quantity)
        }

        
    }

    for (const [product, quantity] of storageObject) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

);