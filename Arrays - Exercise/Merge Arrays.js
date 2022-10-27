function mergeArray(firstArray, secondArray){

    let arrayLength = firstArray.length;
    let thirdArray = [];


    for(let i = 0;i<arrayLength;i++){
        
        if(i % 2 === 0){
            thirdArray.push(Number(firstArray[i]) + Number(secondArray[i]))
        }else {
            thirdArray.push(`${firstArray[i]}${secondArray[i]}`)
        }

    }
    console.log(thirdArray.join(' - '));

}
mergeArray(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

);