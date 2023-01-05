function storeProvision(warehouse, orderedProducts) {
    let final = {}
    const warehouseLength = warehouse.length;

    for(let i = 0; i < warehouseLength;i+=2){
        let product = warehouse[i]
        final[product] = Number(warehouse[i+1]);
    }

    const orderedProductsLength = orderedProducts.length;

    for(let index = 0; index < orderedProductsLength;index+=2){
        const type = orderedProducts[index];
        const quantity = Number(orderedProducts[index+1]);

        if(!final.hasOwnProperty(type)){
            final[type] = 0;
        }

        final[type] += quantity;
    }

    for (const key in final) {
        console.log(`${key} -> ${final[key]}`);
    }


}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])