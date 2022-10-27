function equalSum(arr) {
    let arrLength = arr.length;
    let isEqual = false;
    let counter = 0;

    for (counter = 0; counter < arrLength; counter++) {
        let leftSum = 0;
        let rightSum = 0;

        //leftSum
        for (let j = 0; j < counter; j++) {
            leftSum += arr[j];
        }
        //rightSum
        for (let k = arrLength - 1; k > counter; k--) {
            rightSum += arr[k]
        }

        if (leftSum === rightSum) {
            isEqual = true;
            break;
        }


    }

    if (arrLength === 1) {
        console.log(counter);
    }
    else if (isEqual) {
        console.log(counter);
    } else {
        console.log('no');
    }



}
equalSum([1,2,3,3]);