function oscars(input){

    let index = 0;
    let actorsName = input[index];
    index++;
    let pointsFromAcademy = Number(input[index]);
    index++;
    let degreeCount = Number(input[index]);
    index++;
    let hasNominee = false;
    

    for(i=0;i<degreeCount;i++){
        let currentName = input[index];
        index++;
        let points = Number(input[index]);
        index++;

        let totalPoints = currentName.length * points / 2;
        pointsFromAcademy +=totalPoints;

        if(pointsFromAcademy>1250.5){
            hasNominee = true;
            console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
            break;
        }
    
    }
    if(!hasNominee){
        let diff = Math.abs(pointsFromAcademy - 1250.5)
        console.log(`Sorry, ${actorsName} you need ${diff.toFixed(1)} more!`)
    }    

}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
;