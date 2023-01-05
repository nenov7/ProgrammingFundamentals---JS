function travel(input){
    let destination = input[0];
    let budgetNeeded = input[1];
    let index = 1;
    let savings = 0;

    while(destination!=="End"){
        index++;

        while(savings<budgetNeeded){
            savings += Number(input[index]);
            index++;
        }

        console.log(`Going to ${destination}!`);
        destination = input[index++];
        budgetNeeded = input[index];
        savings = 0;

    }

    
}
travel(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])


;