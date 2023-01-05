function train(arr) {

    //first element is wagons 
    let passengersInWagons = arr.shift().split(' ').map(Number)
    //second element is max capacity 
    let maxCapacity = Number(arr.shift());

    // for loop  arr['Add 10','Add 0','30','10','75']
    for (let index = 0; index < arr.length; index++) {
        let currentRow = arr[index].split(' ');
        let number;
        if (currentRow[0] === 'Add') {
            number = Number(currentRow[1]);
            passengersInWagons.push(number);
        } else {
            number = Number(currentRow[0]);
            //for loop passengersInTrain
            for (let j = 0; j < passengersInWagons.length; j++) {
                if (passengersInWagons[j] + number <= maxCapacity){
                    passengersInWagons[j]+=number;
                    break;
                }
    }
        }



    }
    console.log(passengersInWagons.join(' '));

}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

);