function solve(input){
    
    let ourWord = input.shift();
    
    let instructions = input.shift();

    while(instructions !== 'End'){
        let comm = instructions.split(' ');
        let command = comm[0]
        
        switch(command){
            case 'Translate':
                let char = comm[1];
                let replacement = comm[2];
                
                while(ourWord.includes(char)){
                    ourWord = ourWord.replace(char, replacement)
                }
                console.log(ourWord);
                break;
            case 'Includes':
                let substring = comm[1];
                if(ourWord.includes(substring)){
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Start':
                let startingString = comm[1];
                if(ourWord.startsWith(startingString)){
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                ourWord = ourWord.toLowerCase();
                console.log(ourWord);
                break;
            case 'FindIndex':
                let lastIndex = comm[1];
                console.log(ourWord.lastIndexOf(lastIndex));
                break;
            case 'Remove':
                let startIndex = comm[1];
                let count = comm[2];
                ourWord = ourWord.split('');
                ourWord.splice(startIndex,count);
                console.log(ourWord.join(''));
                break;
        }

        instructions = input.shift();
    }

    
}
solve((["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])
)