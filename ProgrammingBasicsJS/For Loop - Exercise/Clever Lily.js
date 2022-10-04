function cleverLilly(input){

    let age = Number(input[0])
    let washersPrice = Number(input[1])
    let toyPrice = Number(input[2])

    let toyCount = 0;
    let money = 0;

    for(i=1;i<=age;i++){
        if(i % 2 === 0){
          money += 5 * i;
          money--;
        } else {
            toyCount++;
        }

    }

    let toys = toyPrice * toyCount;
    let moneySaved = money + toys;

    if(moneySaved>=washersPrice){
        console.log(`Yes! ${(moneySaved-washersPrice).toFixed(2)}`);
    } else{
        console.log(`No! ${(washersPrice-moneySaved).toFixed(2)}`)
    }
 
}
cleverLilly(["21",
"1570.98",
"3"])

;