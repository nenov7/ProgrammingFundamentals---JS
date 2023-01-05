function dungeonestDark(arr){
   let dungeon = arr[0].split('|')
   let currentHealth = 100;
   let coins = 0;
   let roomCount = 0;
   let win = false; 
   let maxHealth = 100; 


   for(let i = 0;i < dungeon.length;i++){
    let currentRoom = dungeon[i].split(' ');
    let command = currentRoom[0];
    let num = Number(currentRoom[1])
    roomCount++;
    
    if(command === 'potion'){
        if(currentHealth + num >= 100){
            console.log(`You healed for ${maxHealth - currentHealth} hp.`);
            currentHealth = 100;
        } else {
            currentHealth+=num;
            console.log(`You healed for ${num} hp.`);
        }
        console.log(`Current health: ${currentHealth} hp.`);
    }
    else if(command === 'chest'){
        coins += num;
        console.log(`You found ${num} coins.`);
    } else {
        currentHealth-=num;
        if(currentHealth > 0){
            console.log(`You slayed ${command}.`);
            win = true;
        } else {
            console.log(`You died! Killed by ${command}.` );
            win = false;
            console.log(`Best room: ${roomCount}`);
            return;
        }
    }

   }
   
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${currentHealth}`);
   

}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])