function orders(type, quantity){	
    let price = 0;
    if(type === 'water'){
        price = quantity * 1;
    } else if(type === 'coffee'){
        price = quantity * 1.5
    } else if(type === 'coke'){
        price = quantity * 1.4
    } else {
        price = quantity * 2;
    }
    
    console.log(price.toFixed(2));

}
orders("coffee", 2);