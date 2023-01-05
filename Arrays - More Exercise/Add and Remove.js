function solve(arr){
    let index = 0;
    let command = arr[index];
    index++;
    let newArr = [];

    for(let i = 1; i<=arr.length;i++){
        if(command === "add"){
            newArr.push(i)

        } else if(command === "remove") {
            newArr.pop()
        }
        command = arr[index];
        index++;
    }
    if(newArr.length >= 1){
        console.log(newArr.join(" "));
    } else {
        console.log('Empty');
    }
}
solve(['add', 'add', 'remove', 'add', 'add']);