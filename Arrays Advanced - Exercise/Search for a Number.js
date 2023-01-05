function searchForANum(generalArr, secondArr){

    let numsToTake = secondArr.shift();
    let numsToDelete = secondArr.shift();
    let numToFind = secondArr.shift();

    let newArr = generalArr.slice(0,numsToTake);
    newArr.splice(0,numsToDelete);
    let counter = 0;

    for(let i = 0; i < newArr.length;i++){
        if(numToFind === newArr[i]){
            counter++;
        }
    }

    console.log(`Number ${numToFind} occurs ${counter} times.`);

}
searchForANum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    
)
