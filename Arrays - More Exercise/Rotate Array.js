function rotate(arr){
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();
    
    for(let i = 0; i < rotations;i++){
        let current = arr.pop();
        arr.unshift(current);

    }
    console.log(arr.join(' '));

}
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);