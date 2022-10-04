function printAndSum(firstNum, endNum){
    let sum = 0;
    let numbers = ''

    for(let i = firstNum;i<=endNum;i++){
        sum+=i;
        numbers+= i + ' ';
        
    }
    console.log(`${numbers}`);
    console.log(`Sum: ${sum}`);

}
printAndSum(50, 60)