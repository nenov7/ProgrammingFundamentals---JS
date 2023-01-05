function solve(input){
    let moneyFromSingleUser = Number(input.shift());
    let usersCount = Number(input.shift());
    let totalMoney = 0; 
    for(let i = 1; i <= usersCount;i++){
        let searches = Number(input.shift());

        if(searches > 5 && i % 3 !== 0){
            totalMoney+= searches * moneyFromSingleUser * 2;
        } else if(searches === 1){
            continue;
        } else if(i % 3 === 0){
            
            if(searches > 5){
                totalMoney+= searches *moneyFromSingleUser * 6;
            } else if(searches === 1){
                continue;
            } else {
                totalMoney+= searches *moneyFromSingleUser * 3;
            }
        } else {
            totalMoney+= searches * moneyFromSingleUser;
        }
         
    }

    console.log(`Total money earned: ${totalMoney.toFixed(2)}`);

}
solve(["3.0",
"7",
"0",
"1",
"2",
"3",
"4",
"6",
"15"])





;