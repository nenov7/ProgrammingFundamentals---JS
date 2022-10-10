function reversed(count, array) {
    let newArray = [];

    for(let i = count - 1; i>=0;i--){
        newArray.push(array[i]);
    }
    newArray = newArray.join(' ')
    console.log(newArray);
    
    
}
reversed();