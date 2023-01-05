function solve(arr){
    let index = 0;
    let currentNum = Number(arr[index]);
    index++;
    let maxNum = Number.MIN_SAFE_INTEGER;
    let newArr = [];

    for(let i = 0; i < arr.length;i++){
        if(currentNum >= maxNum){
            maxNum = currentNum;
            newArr.push(maxNum);
        }
        currentNum = Number(arr[index]);
        index++;


    }
    console.log(newArr.join(' '));

}
solve([ 20, 3, 2, 15, 6, 1]);