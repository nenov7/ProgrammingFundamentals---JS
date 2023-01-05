function bonus(input){
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let additinonalBonus = Number(input.shift());
    let currentLecture = 0;
    let maxNum = 0;

    

    for(let i = 0; i < students;i++){
        
        let bonus = (Number(input[i]) / lectures) * (5 + additinonalBonus);

        if(bonus >= maxNum){
            maxNum = bonus;
            currentLecture = Number(input[i]);
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxNum)}.`);
    console.log(`The student has attended ${currentLecture} lectures.`);
}
bonus([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
);