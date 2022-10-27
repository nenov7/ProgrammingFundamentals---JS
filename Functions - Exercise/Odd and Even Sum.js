function oddAndEvenSum(num){
    let numAsString = num.toString();
    let numLength = numAsString.length;
    let newArr = [];
    let oddSum = 0;
    let evenSum = 0;
    newArr.push(numAsString)

    for(let i = 0;i<numLength;i++){
        if(Number(newArr[0][i]) % 2 === 0 ){
            evenSum += Number(newArr[0][i])
        } else {
            oddSum += Number(newArr[0][i])
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    

    
    
}
oddAndEvenSum(3495892137259234)