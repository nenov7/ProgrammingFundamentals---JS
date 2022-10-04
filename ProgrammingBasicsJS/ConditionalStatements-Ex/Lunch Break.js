function lunch(input){

    let serialName = input[0];
    let serialLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchBreak = 1 / 8 * breakLength;
    let calmBreak = 1 / 4 * breakLength;
    let timeNeeded = lunchBreak + calmBreak + serialLength;
    
//     •	Ако времето е достатъчно да изгледате епизода: 
// "You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
// •	Ако времето не Ви е достатъчно:
// "You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."

if(timeNeeded <= breakLength){
    console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(breakLength - timeNeeded)} minutes free time.`)
}
else {
    console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(timeNeeded - breakLength)} more minutes.`)
}

}
lunch(["Game of Thrones",
"60",
"96"])


;