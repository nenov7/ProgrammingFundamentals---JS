function smallestTwo(arr){
    let sortedArr = arr.sort((a,b) => a - b);

    console.log(sortedArr.slice(0,2).join(' '));
}
smallestTwo([3, 0, 10, 4, 7, 3]);