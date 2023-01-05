function processOddNums(numsArr){
    let newArr = numsArr
    .filter((num,i) => i % 2 !== 0)
    .map(y => y * 2)
    .reverse();

    console.log(newArr.join(' '));
}
processOddNums([10, 15, 20, 25])