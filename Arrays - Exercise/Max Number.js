function maxNum(currArr) {
    let arrLength = currArr.length;
    let newArr = [];
    let isTopInteger = false;

    for (let i = 0; i < arrLength; i++) {

        for (let j = 1; j < arrLength; j++) {

            if(j + i === arrLength){
                isTopInteger = true;
                break;
            }
            if (currArr[i] > currArr[j + i]) {
              isTopInteger = true;

            } else {
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger) {
            newArr.push(currArr[i]);
        }

    }

    console.log(`${newArr.join(' ')}`);

}
maxNum([1, 4, 3, 2]);