function backToThePast(input){

    let money = Number(input[0]);
    let lastYear = Number(input[1]);
    let years = 18;
    let spendMoney = 0; 

for(let currentYear = 1800; currentYear <=lastYear;currentYear++){
    if(currentYear % 2 === 0){
        spendMoney+=12000
    } else {
        spendMoney+= 12000 + (50 * years);
    }
    years++;
}
if(spendMoney <= money){
    console.log(`Yes! He will live a carefree life and will have ${(money - spendMoney).toFixed(2)} dollars left.`);
} else {
    console.log(`He will need ${(spendMoney - money).toFixed(2)} dollars to survive.`);
}



}
backToThePast(['50000',
'1802']
);