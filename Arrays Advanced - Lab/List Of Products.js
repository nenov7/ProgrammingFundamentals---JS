function listOfProducts(arrayOfProducts){

    let sorted = arrayOfProducts.sort();

    for(let i = 0; i < arrayOfProducts.length;i++){
        console.log(`${i + 1}.${sorted[i]}`);
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples']);