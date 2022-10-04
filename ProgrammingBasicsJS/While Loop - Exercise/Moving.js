function moving(input){
let index = 0;

let width = Number(input[index]);
index++;
let length = Number(input[index]);
index++;
let height = Number(input[index]);
index++;

let placeAvailable = width*length*height;

let command = input[index];
index++;

while (command !== "Done"){
    let currentBox = Number(command);
    placeAvailable -=currentBox;

    if(placeAvailable < 0){
        break;
    }

    command = input[index];
    index++;

}

if(command === "Done" && placeAvailable>0){
    console.log(`${placeAvailable} Cubic meters left.`)
} else {
    console.log(`No more free space! You need ${Math.abs(placeAvailable)} Cubic meters more.`)
}
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


;