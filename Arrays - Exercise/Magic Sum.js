function solve(arr, num) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1 + i; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                newArr.push(`${arr[i]} ${arr[j]}`);
                console.log(newArr.join(' '));
                newArr = [];
            }
        }
    }


}
solve([1, 2, 3, 4, 5, 6],6);