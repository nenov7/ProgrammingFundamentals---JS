function counterStrike(input){
    let initialEnergy = Number(input.shift());
    let wonBattles = 0; 

    let command = input.shift();

    while(command !== "End of battle"){

        if(wonBattles % 3 === 0 && wonBattles !== 0){
            initialEnergy+= wonBattles;
        }

        if(Number(command) > initialEnergy){
            return console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
        }
        initialEnergy -= Number(command);

        if(initialEnergy>= 0){
            wonBattles++;
        }

        command = input.shift();

    }
    console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);

}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])


;