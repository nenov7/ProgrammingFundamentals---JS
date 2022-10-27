function arrayRotation(currentArray, rotations){

    let arrayLength = currentArray.length;

    for(let i = 0; i < rotations; i++){
        let index = currentArray.shift();
        currentArray.push(index);

    }
    
    console.log(currentArray.join(' '));
   
    
}
arrayRotation([2, 4, 15, 31], 5);