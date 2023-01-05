function trainTheTrainers(input){
    let index = 0;
    let numberOfPeople = Number(input[index]);
    index++;
    let presName = input[index];
    index++;

    let gradeSum = 0;
    let avgGradePerPres = 0;
    let forWholeAverage = 0;
    let wholeAverage = 0;
    let cnt = 0;
    let gradeCnt = 0;

    while(presName !== "Finish"){
        cnt++;
        for(let gradeCount = 0; gradeCount<numberOfPeople;gradeCount++){
            gradeCnt++;
            let grade = Number(input[index]);
            gradeSum+=grade;
            index++;
        }
        avgGradePerPres = gradeSum / gradeCnt;
        console.log(`${presName} - ${avgGradePerPres.toFixed(2)}.`);
        forWholeAverage+=avgGradePerPres;
        wholeAverage = forWholeAverage / cnt;

        presName = input[index];
        index++;
        gradeCnt = 0;
        avgGradePerPres = 0;
        gradeSum = 0;

    }

    console.log(`Student's final assessment is ${wholeAverage.toFixed(2)}.`);
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])



