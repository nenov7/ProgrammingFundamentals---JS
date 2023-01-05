function solve(num){
    let numToString = num.toString();
    let firstNum = Number(numToString[2]);
    let secondNum = Number(numToString[1]);
    let thirdNum = Number(numToString[0]);

    for(let i = 1; i <= firstNum;i++){
        for(let j = 1; j <=secondNum;j++){
            for(let k = 1; k <=thirdNum;k++){
                console.log(`${i} * ${j} * ${k} = ${i*j*k}`);
            }
        }
    }

}

solve(222);

