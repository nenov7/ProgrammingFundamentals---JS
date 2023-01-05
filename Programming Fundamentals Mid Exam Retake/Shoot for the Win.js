function shootForTheWin(input) {

    let sequence = input.shift().split(' ').map(Number);
    let shots = 0; 
    let command = input.shift();

    while (command !== 'End') {
        let currIndex = Number(command);
        let currNum = sequence[currIndex];
        

        if (currIndex > sequence.length - 1) {
            command = input.shift();
            continue;
        } 
        else {
            shots++;
            if (currNum !== -1) {
                sequence.splice(currIndex, 1, -1)
            } 
            for (let i = 0; i < sequence.length; i++) {
                if(sequence[i] === -1){
                    continue;
                }
                if(sequence[i] > currNum){
                    sequence[i]-=currNum;
                } else {
                    sequence[i]+=currNum;
                }
            }
        }
        command = input.shift();
    }
    console.log(`Shot targets: ${shots} -> ${sequence.join(' ')}`);

}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])

;