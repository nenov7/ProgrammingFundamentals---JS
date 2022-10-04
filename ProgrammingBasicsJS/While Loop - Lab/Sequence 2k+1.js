function sequence(input){

let index = 0;
let num = Number(input[index]);
let firstNum = 1;

while(firstNum<=num){
    console.log(firstNum);
    firstNum = 2 * firstNum + 1;
}
}
sequence(["31"]);