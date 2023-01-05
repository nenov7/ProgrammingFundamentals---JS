function sumSeconds (input){
let time1 = Number(input[0])
let time2 = Number(input[1])
let time3 = Number(input[2])

let sumAllSeconds = time1 + time2 + time3;
let timeInMinutes = Math.floor(sumAllSeconds / 60);
let timeInSeconds = sumAllSeconds % 60;

if(timeInSeconds<10){
    
console.log(`${timeInMinutes}:0${timeInSeconds}`)
}
else {
    console.log(`${timeInMinutes}:${timeInSeconds}`)
}


}
sumSeconds(["35",
"45",
"44"])

