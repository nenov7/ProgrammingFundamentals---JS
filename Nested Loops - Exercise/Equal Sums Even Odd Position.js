function evenOdd(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let nums = '';

    for (let i = num1; i <= num2; i++) {
        let currentNum = '' + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }


        }
        if (oddSum === evenSum) {
            nums += `${i} `

        }



    }
    console.log(nums);

}
evenOdd(["100000",
    "100050"])
    ;