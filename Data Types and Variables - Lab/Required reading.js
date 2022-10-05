function requiredReading(pagesNumber, pagesPerHour, maxDays){
    let totalTime = pagesNumber / pagesPerHour;
    let hoursNeeded = totalTime / maxDays;

    console.log(hoursNeeded);

}
requiredReading(432,
    15 ,
    4 
    
    );