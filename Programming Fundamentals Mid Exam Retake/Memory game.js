function memoryGame(input) {

    let sequence = input.shift().split(' ');
    let turns = 0;

    let line = input.shift();
    while (line !== 'end') {
        let [firstIndex, secondIndex] = line.split(' ');
        
        
        turns++;
        let firstElement = Number(sequence[firstIndex]);
        let secondElement = Number(sequence[secondIndex]);

        if (firstElement == secondElement) {
            firstIndex = Number(firstIndex);
            sequence.splice(sequence[firstIndex], 1);
            secondIndex = Number(secondIndex)
            sequence.splice(sequence[secondIndex], 1);
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);

        } else if (firstElement !== secondElement) {
            console.log("Try again!");
        } else if (sequence.length === 0) {
            return console.log(`You have won in ${turns} turns!`);
        }

        line = input.shift();
    }

    if(line === 'end' && sequence.length > 0){
        console.log(`Sorry you lose :(`)
        console.log(sequence.join(' '));
            
    }

}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);