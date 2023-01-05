function x(input){

let index = 0;
let cakeLength = Number(input[index]);
index++;
let cakeWidth = Number(input[index]);
index++;
let piecesNumber = cakeLength*cakeWidth;
let command = input[index];
index++;

while(command !== "STOP"){
    let takeCake = Number(command);
    piecesNumber-=takeCake;

    if(piecesNumber< 0){
        break;
    }
command = input[index];
index++;
    
}

if(command === "STOP" && piecesNumber>0){
    console.log(`${piecesNumber} pieces are left.`);
} else {
    console.log(`No more cake left! You need ${Math.abs(piecesNumber)} pieces more.`)
}


}
x(["10",
"2",
"2",
"4",
"6",
"STOP"])

;