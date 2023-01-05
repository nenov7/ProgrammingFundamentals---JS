function graduation(input) {
    let index = 0;

    let studentsName = input[index];
    index++;

    let totalGrades = 0;
    let grade = 1;

    for (let i = 1; i < input.length; i++) {

        let degree = Number(input[index]);
        index++;
        totalGrades += degree;


        if (degree >= 4.00) {
            grade++;
        } else {
            console.log(`${studentsName} has been excluded at ${grade} grade`)
            break;
        }
        if (grade === 13) {
            console.log(`${studentsName} graduated. Average grade: ${(totalGrades / 12).toFixed(2)}`);
            break;
        }
    }

}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])



    ;