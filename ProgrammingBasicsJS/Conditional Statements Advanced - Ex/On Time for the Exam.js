function onTimeForTheExam(input){

let examHour = Number(input[0]);
let examMinute = Number(input[1]);
let arrivalHour = Number(input[2]);
let arrivalMinute = Number(input[3]);

let examTimeInMinutes = examHour * 60 + examMinute;
let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;

// Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на изпита или до половин час преди това.
//Ако е пристигнал по-рано повече от 30 минути, той е подранил
//Ако е дошъл след часа на изпита, той е закъснял

if(arrivalTimeInMinutes === examTimeInMinutes ||(examTimeInMinutes - arrivalTimeInMinutes) <= 30 && (examTimeInMinutes - arrivalTimeInMinutes)>0){
    console.log("On time")
} else if((examTimeInMinutes - arrivalTimeInMinutes) > 30){
    console.log("Early")
} else if(arrivalTimeInMinutes > examTimeInMinutes){
    console.log("Late")
}

// •	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".

let earlyHour = (examTimeInMinutes - arrivalTimeInMinutes) / 60;
let earlyMinute =  (examTimeInMinutes - arrivalTimeInMinutes) % 60;

let lateHour = (arrivalTimeInMinutes - examTimeInMinutes) / 60;
let lateMinute = (arrivalTimeInMinutes - examTimeInMinutes) % 60;

if(examTimeInMinutes - arrivalTimeInMinutes < 60 && examTimeInMinutes - arrivalTimeInMinutes >0 ){
    console.log(`${examTimeInMinutes - arrivalTimeInMinutes} minutes before the start`)
} else if((examTimeInMinutes - arrivalTimeInMinutes)>=60){
    if(earlyMinute < 10){
        console.log(`${Math.floor(earlyHour)}:0${earlyMinute} hours before the start`)
    } else{
        console.log(`${Math.floor(earlyHour)}:${earlyMinute} hours before the start`)
    }
    
} else if(arrivalTimeInMinutes - examTimeInMinutes < 60 && arrivalTimeInMinutes - examTimeInMinutes > 0){
    console.log(`${arrivalTimeInMinutes - examTimeInMinutes} minutes after the start`)
} else if(arrivalTimeInMinutes - examTimeInMinutes>=60){
    if(lateMinute < 10){
        console.log(`${Math.floor(lateHour)}:0${lateMinute} hours after the start`)
    } else {
        console.log(`${Math.floor(lateHour)}:${lateMinute} hours after the start`)
    }
}


}
onTimeForTheExam (["11",
"30",
"10",
"55"]);