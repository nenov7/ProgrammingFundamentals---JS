function sumOfTwoNumbers(input) {
    let firstNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFinished = false;

    let combCnt = 0;

    for (let i = firstNum; i <= endNum; i++) {
        for (let y = firstNum; y <= endNum; y++) {
            combCnt++;
            if (i + y === magicNum) {
                console.log(`Combination N:${combCnt} (${i} + ${y} = ${magicNum})`);
                isFinished = true;
                break;
            }
        } if (isFinished) {
            break;
        }
    }
    if(!isFinished){
        console.log(`${combCnt} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["88", 
"888", 
"2000"]);