function equalArrays(firstArray, secondArray){

    let areEqual = false;
    let sum = 0;
    let diff = 0;

    for(let i = 0; i < firstArray.length;i++){
        if(Number(firstArray[i]) === Number(secondArray[i])){
            areEqual = true;
            sum+= Number(firstArray[i]);
            diff++;
        } else {
            areEqual = false;
            break;
        }
    }
    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${diff} index`);

    }

}
equalArrays(['1'], ['10']);