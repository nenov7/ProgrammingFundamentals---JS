function addAndSubtract(array){

    let newArray = [];
    let oldSum = 0;
    let newSum = 0;

    for(let i = 0; i < array.length;i++){
        let currentNum = array[i];

        let even = currentNum + i;
        let odd = currentNum - i;
        oldSum += currentNum;

        if(array[i] % 2 === 0){
            currentNum = even;
            newArray.push(currentNum);
            newSum+=currentNum;
        } else {
            currentNum = odd;
            newArray.push(currentNum);
            newSum+=currentNum;
        }
        
    }

    console.log(newArray);
    console.log(oldSum);
    console.log(newSum);

}
addAndSubtract([-5, 11, 3, 0, 2]);