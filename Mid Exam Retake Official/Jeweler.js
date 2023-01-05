function solve(input){
    let whiteGold = input.shift().split(' ').map(Number);
    let yellowGold = input.shift().split(' ').map(Number);

    let earringsCount = 0; 
    let storeGold = 0; 

    for(let i = 0; i < whiteGold.length; i++){
        if(whiteGold[i] + yellowGold[i] === 10){
            earringsCount++;
        } else if(whiteGold[i] + yellowGold[i]> 10){
            while(true){
                yellowGold[i]-=2;
                if(whiteGold[i] + yellowGold[i] === 10){
                    earringsCount++;
                    break;
                } else if(whiteGold[i] + yellowGold[i] < 10){
                    storeGold+= whiteGold[i] + yellowGold[i];
                    break;
                }
            }
        } else {
            storeGold += whiteGold[i] + yellowGold[i];
        }
    }

    if(storeGold >= 10){
        earringsCount += Math.floor(storeGold / 10);
    }

    if(earringsCount >= 7){
        console.log(`Great success, you created ${earringsCount} earrings.`);
    } else {
        console.log(`Keep trying, you need ${7 - earringsCount} more earrings.`);
    }
}
solve(['5 3 2 2 4', 
'5 5 8 2 6']) 
