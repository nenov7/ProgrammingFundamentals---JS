function solve(input){

    let currentInput = input[0];
    let index = 1; 
    let minNumber = Number.MAX_SAFE_INTEGER;

    while(currentInput !== "Stop"){
        let inputAsNumber = Number(currentInput);

        if(inputAsNumber < minNumber){
            minNumber = inputAsNumber;
        }
        currentInput = input[index];
        index++;
    }
    console.log(minNumber);

}
solve(["100",
"99",
"12",
"721",
"Stop"])
;