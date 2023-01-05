function softUniReception(input){

    let firstEmployee = Number(input[0]);
    let secondEmployee = Number(input[1]);
    let thirdEmployee = Number(input[2]);
    let studentsToBeHelped = Number(input[3]);
    
    let studentsPerHour = firstEmployee + secondEmployee + thirdEmployee;

    let hours = 0 ;

    while(studentsToBeHelped > 0){
        studentsToBeHelped -= studentsPerHour;
        hours++;
        if(hours % 4 === 0){
            hours++
        }
        if(studentsToBeHelped <=0){
            break;
        }
        

       
    }

    console.log(`Time needed: ${hours}h.`);


}
softUniReception(['5','2','3','120']);