function cleverLily(input) {
    let lillyAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let money = 0;
    let toysCount = 0;
    let savedMoney = 0;
 
    for(let i = 1; i<=lillyAge;i++){
        if(lillyAge % 2 === 0){
            money+= 5*i;
            money--;
        } else {
            toysCount++;
        }
    }

    let lillyMoney = savedMoney + (toysCount * toyPrice) - lillyBrother;
 
    if(washingMachinePrice <= lillyMoney) {
        console.log(`Yes! ${(lillyMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - lillyMoney).toFixed(2)}`);
    }
 
}
cleverLily((["21",
"1570.98",
"3"])

);