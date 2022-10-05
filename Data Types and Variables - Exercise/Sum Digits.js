function solve(number){
    let numberToString = number.toString();
    let numberOfDigits = numberToString.length;
    let sum = 0;

    for(let i = 0;i<numberOfDigits;i++){
        let currentNum = Number(numberToString[i])
        sum += currentNum;

    }
    console.log(sum);

}
solve(999998965988599856985);