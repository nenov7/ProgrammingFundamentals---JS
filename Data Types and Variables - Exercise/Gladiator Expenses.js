function gladiatorExpenses(lostFightsCount, helmetPrice,swordPrice, shieldPrice, armorPrice ) {

    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;

    for(let i = 1;i<=lostFightsCount;i++){
        if(i % 2 === 0){
            helmetBroken++;
        }
        if(i % 3 === 0){
            swordBroken++;
        }
        if(i % 6 === 0){
            shieldBroken++;
        }
        if(i%12 === 0){
            armorBroken++;
        }
    }

    let helmetExpense = helmetBroken * helmetPrice;
    let swordExpense = swordBroken * swordPrice;
    let shieldExpense = shieldBroken * shieldPrice;
    let armorExpense = armorBroken * armorPrice;
    let expenses = helmetExpense + swordExpense + shieldExpense + armorExpense;

    console.log(`Gladiator expenses: ${(expenses).toFixed(2)} aureus`);




}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
    
    )