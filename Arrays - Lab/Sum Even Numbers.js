function arrayOfNums(array){
    let sum = 0;
    for(let i = 0;i<array.length;i++){
        if(Number(array[i]) % 2 === 0){
            sum+= Number(array[i]);
        }
    }
    console.log(sum);
   
    
}
arrayOfNums(['3','5','7','9'])