function main(input){
let hoursInput = Number(input[0]);
let minutesInput = Number(input[1]);

let timeInMinutes= hoursInput * 60 + minutesInput;
timeInMinutes +=15;

let h = Math.floor(timeInMinutes / 60)
let m = timeInMinutes % 60

if(h === 24){
    h = 0;
}
 if(m<10){
    console.log(`${h}:0${m}`)
 } else {
    console.log(`${h}:${m}`)
 }

}
main(["12", "48"]);