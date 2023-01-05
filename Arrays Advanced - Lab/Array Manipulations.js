function arrManipulations(input){
    let arr = input.shift()
    arr = arr.split(' ')
    arr = arr.map(Number);
    
    for(let i = 0; i < input.length;i++){
        let [command, firstNum, secondNum] = input[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command){
            case "Add":
                arr.push(firstNum);
                break;
            case "Remove":
                arr = arr.filter(el => el != firstNum);
                break;
            case "RemoveAt":
                arr.splice(firstNum, 1);
                break;
            case "Insert":
                arr.splice(secondNum,1,firstNum);
                break;
        }
    }
    console.log(arr.join(' '));

}
arrManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']

);