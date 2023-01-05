function numbers(nums){
    let numsArray = nums.split(' ').map(Number);
    let newArr = [];
    
    let averageNum = 0;
    let sum = 0; 

    for (let currNum of numsArray) {
        sum+=currNum;
    }
    averageNum = sum / numsArray.length
    
    let sorted = numsArray.sort((a,b) => b-a)
    for (let num of sorted) {
        if(num > averageNum){
            newArr.push(num);
        }
        if(newArr.length === 5){
            break;
        }
        
    }

    let sortedArr = newArr.sort((a,b) => b-a).join(' ');

    if(newArr.length == 0){
        console.log('No');
    } else {
        console.log(sortedArr);
    }

}
numbers('10 20 30 40 50');