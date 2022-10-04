function radiansToDegress([a,b,c]) {
    let depositSum = a;
    let depositTerm = b;
    let glp = c;
    let natrupanaLihva = depositSum * glp / 100;
    let lihvaZaMesec = natrupanaLihva / 12;
    let sum = depositSum + depositTerm * lihvaZaMesec;
    console.log(sum);
}
radiansToDegress([200,3,5.7]);