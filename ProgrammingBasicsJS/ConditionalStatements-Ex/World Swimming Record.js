function swim (input){
    //     1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
    // 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
    // 3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
    
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeFor1MeterSeconds = Number(input[2]);
    
    let hisTime = distanceInMeters * timeFor1MeterSeconds;
    
    
    // съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. 
    
   let slow = Math.floor(distanceInMeters / 15);
   hisTime += slow * 12.5;
    
    // •	Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
    // o	" Yes, he succeeded! The new world record is {времето на Иван} seconds."
    // •	Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
    // o	"No, he failed! He was {недостигащите секунди} seconds slower."
    // Резултатът трябва да се форматира до втория знак след десетичната запетая.
    
    
    if(hisTime < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${(hisTime).toFixed(2)} seconds.`)
    }else {
        console.log(`No, he failed! He was ${(hisTime - recordInSeconds).toFixed(2)} seconds slower.`)
    }
    
    
    }
swim(["10464",
"1500",
"20"])



;