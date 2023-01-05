function distinctArray(numsArr){
    let newArr = [];
    
    for(let i = 0 ; i < numsArr.length; i++){
        if(!newArr.includes(numsArr[i])){
            newArr.push(numsArr[i]);
        }
    }
    console.log(newArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);