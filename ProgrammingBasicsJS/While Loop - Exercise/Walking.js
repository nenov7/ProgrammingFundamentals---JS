function walking(input){
let index = 0; 
let stepsGoal = 10000;
let steps = 0;
let currentSteps = 0

let command = input[index];
index++;

while(command !== "Going home"){
    currentSteps = Number(command);
    steps +=currentSteps;

    if(steps>=stepsGoal){
        break;
    }

    command = input[index];
    index++;

}

if(command === "Going home"){
    currentSteps = Number(input[index]);
    steps += currentSteps;
}

if(steps >= stepsGoal){
console.log("Goal reached! Good job!");
console.log(`${Math.abs(steps-stepsGoal)} steps over the goal!`)
} else{
console.log(`${Math.abs(steps-stepsGoal)} more steps to reach goal.`)
}


}
walking(["1000",
"1500",
"2000",
"6500"])






;
