function numberModification(number){
    let numToString = number.toString();
    let arrNums = [];
    arrNums.push(numToString);

    let average = 0;

    for(let i = 0;i<numToString.length;i++){
        arrNums.push(9);
        if(average > 5){
            break;
        }

        for(let j = 0; j < numToString.length;j++){
            average = Number(arrNums.join('')) / numToString.length;
        }



        
    }
    console.log(numToString);
    console.log(average);
    console.log(arrNums.join(''));

}
numberModification(101);
numberModification(5835);