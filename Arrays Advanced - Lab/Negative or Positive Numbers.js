function negativeOrPositive(arrOfNums) {
    let newArr = [];

    for (let i = 0; i < arrOfNums.length; i++) {
        if (Number(arrOfNums[i]) < 0) {
            newArr.unshift(arrOfNums[i]);
        } else {
            newArr.push(arrOfNums[i]);
        }
    }
    console.log(newArr.join('\n'));
}
negativeOrPositive(['7', '-2', '8', '9']);