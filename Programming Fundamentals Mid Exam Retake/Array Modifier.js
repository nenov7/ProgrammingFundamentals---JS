function arrayModifier(input) {

    let array = input.shift().split(' ').map(Number);

    let line = input.shift();

    while (line !== 'end') {
        let command = line.split(' ')[0];

        if (command === 'swap') {
            let index1 = line.split(' ')[1];
            let index2 = line.split(' ')[2];
            index1 = Number(index1);
            index2 = Number(index2);
            let firstElement = array[index1];
            let secondElement = array[index2];
            
            array.splice(index1, 1, secondElement);
            array.splice(index2, 1, firstElement)
            

        } else if (command === 'multiply') {
            let index1 = line.split(' ')[1];
            let index2 = line.split(' ')[2];
            index1 = Number(index1);
            index2 = Number(index2);
            let firstElement = array[index1];
            let secondElement = array[index2];

            array.splice(index1, 1, firstElement*secondElement);

        } else if (command === 'decrease') {
            for(let i = 0; i< array.length;i++){
                array[i]-=1;
            }
        }

        line = input.shift();
    }

    console.log(array.join(', '));

}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
);