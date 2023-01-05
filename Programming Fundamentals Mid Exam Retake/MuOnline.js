function muOnline(input){
    let arr = input.split('|');
    let hp = 100;
    let bitcoins = 0;
    let roomCount = 0;
    let isDead = false;

    for(let i = 0; i < arr.length;i++){
        let line = arr[i].split(' ');
        let command = line[0];
        let amount = Number(line[1]);
        
        if(command === 'potion'){
            
            roomCount++;
            if(hp + amount > 100){
                console.log(`You healed for ${100 - hp} hp.`);
                hp = 100;
                
            } else {
                hp+=amount;
                console.log(`You healed for ${amount} hp.`);
            }
            console.log(`Current health: ${hp} hp.`);
            
        } else if(command === 'chest'){
            bitcoins+=amount;
            roomCount++;
            console.log(`You found ${amount} bitcoins.`);
        } else{
            hp-=amount;
            roomCount++;
            if(hp > 0){
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCount}`);
                isDead = true;
                break;
            }
        }
    }
    if(!isDead){
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${hp}`);
    }
    
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")