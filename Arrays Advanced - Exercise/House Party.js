function houseParty(arr){

    let newGuestArray = [];

    for(let i = 0; i < arr.length; i++){
        let command = arr[i].split(' ');
        let currentName = command[0];

        if(command.length < 4){ // person is going
            if(!newGuestArray.includes(currentName)){
                newGuestArray.push(currentName)
            } else {
                console.log(`${currentName} is already in the list!`);
            }
        } else { //person is not going
            if(!newGuestArray.includes(currentName)){
                console.log(`${currentName} is not in the list!`);
            } else {
                newGuestArray.splice(newGuestArray.indexOf(currentName),1)
            }
        }
    }
    console.log(newGuestArray.join('\n'));

}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']


);