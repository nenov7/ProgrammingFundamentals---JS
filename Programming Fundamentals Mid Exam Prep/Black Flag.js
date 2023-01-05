function blackFlag(input){

    let daysCount = Number(input[0]);
    let plunderPerDay = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let totalPlunder = 0; 

    for(let i = 1; i <= daysCount;i++){

        totalPlunder+=plunderPerDay;
        
        if(i % 3 === 0){
            totalPlunder += plunderPerDay / 2;
        }


        if(i % 5 === 0){
            totalPlunder*=0.7;
        }
    }

    let percentage = (totalPlunder / expectedPlunder) * 100;

    if(totalPlunder >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
    

}
blackFlag(["10",
"20",
"380"])
;