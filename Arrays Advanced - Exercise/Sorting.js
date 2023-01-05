function sorting(arrOfNums){
    let result = [];
    arrOfNums = arrOfNums.sort((a, b) => a - b);
   while(arrOfNums.length !== 0){
     result.push(arrOfNums[arrOfNums.length-1]) && arrOfNums.pop();
     result.push(arrOfNums[0]) && arrOfNums.shift();
   }
console.log(result.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47,25]);