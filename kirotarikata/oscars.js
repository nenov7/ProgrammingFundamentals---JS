function oscars(input){

    let index = 0; 
    let actorsName = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let animatorsCount = Number(input[index]);
    index++;
    let hasNominee = false;

for(let i = 0; i < animatorsCount;i++){
    let gradersName = input[index];
    index++;
    let gradersPoints = Number(input[index]);
    index++;

    academyPoints+= (gradersName.length * gradersPoints) / 2;

    if(academyPoints >= 1250.5){
        hasNominee = true;
        break;
    } else {
        hasNominee = false;
    }
}

if(hasNominee){
    console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${academyPoints}!`);
} else {
    console.log(`Sorry, ${actorsName} you need ${1250.5 - academyPoints} more!`);
}



}
oscars((["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
);