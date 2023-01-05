function piccolo(arrayOfCars){

    let parkingLot = new Map();

    for (const currentCar of arrayOfCars) {
        let [direction, carNumber] = currentCar.split(', ');
        
        if(direction === 'IN'){
            parkingLot.set(carNumber);
        } else if(direction === 'OUT'){
            parkingLot.delete(carNumber)
        }
    }

    let sorted = Array.from(parkingLot).sort((a,b) => a[0].localeCompare(b[0]))

    if(sorted.length === 0){
        console.log(`Parking Lot is Empty`);
    }
    
    sorted.forEach(element => {
        console.log(element[0]);
    });

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);