function reversedInPlace(array) {
    let newArray = [];

    for(let i = array.length - 1; i>=0;i--){
        newArray.push(array[i]);
    }
    newArray = newArray.join(' ')
    console.log(newArray);
    
    
}
reversedInPlace(['abc', 'def', 'hig', 'klm', 'nop']);