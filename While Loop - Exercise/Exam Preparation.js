function preparation(input) {

    let lastProblem = '';
    let index = 0;
    let goodGrades = 0;
    let badGrades = 0;
    let gradesSum = 0;
    let problemsCount = 0;
    let lastGrade = 0;

    let remainingBadGrades = Number(input[index]);
    index++;

    for (let i = 1; i <= input.length; i++) {
        let currentProblem = input[index];
        index++;

        let currentGrade = Number(input[index]);
        index++;

        if (currentProblem !== "Enough") {
            lastProblem = currentProblem;
            lastGrade = currentGrade;
        } else {

            console.log(`Average score: ${(gradesSum / (goodGrades + badGrades)).toFixed(2)}`);
            console.log(`Number of problems: ${problemsCount}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }


        if (lastGrade > 4) {
            goodGrades++;
            gradesSum += lastGrade;
        } else {
            badGrades++;
            gradesSum += lastGrade;
        }

        if (badGrades >= remainingBadGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }



        problemsCount++;
    }

}


preparation(["4",
    "Stone Age",
    "5",
    "Freedom",
    "5",
    "Storage",
    "3", "Enough"]);