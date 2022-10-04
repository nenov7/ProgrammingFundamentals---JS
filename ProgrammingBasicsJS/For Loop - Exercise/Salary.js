function salaryExercise(input){
    let index = 0;
    let tabsCount = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    let lostTheSalary = false;

    for(i = 0; i<tabsCount;i++){
        let tabName = input[index];
        index++;

        if(tabName === "Facebook"){
            salary-=150;
        } else if(tabName === "Instagram"){
            salary-=100;
        } else if(tabName === "Reddit"){
            salary-=50;
        }

        if(salary<=0){
            lostTheSalary = true;
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if(!lostTheSalary){
       console.log(salary.toFixed(0));
    }

}
salaryExercise(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"]);