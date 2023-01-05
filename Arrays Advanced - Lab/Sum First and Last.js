function sumFirstAndLast(arr){
    let newArr = [];

    newArr.push(Number(arr[0]) + Number(arr[arr.length -1]));
    console.log(newArr.join(''));
}
sumFirstAndLast(['5', '10']);