function theLift(input) {
    let waitingPeople = Number(input.shift());
    let freePlaces = input.shift();
    let wagon = freePlaces.split(' ').map(Number);

    let neededPeople = 0;

    for (let i = 0; i < wagon.length; i++) {

        if (waitingPeople <= 0) {
            break;
        }

        if (waitingPeople <= 4) {
            neededPeople = waitingPeople;
            if (wagon[i] == 0) {
                wagon[i] += neededPeople;
                waitingPeople -= neededPeople;
            } else if (wagon[i] == 1) {

                wagon[i] += neededPeople;
                waitingPeople -= neededPeople
            } else if (wagon[i] == 2) {

                wagon[i] += neededPeople;
                waitingPeople -= neededPeople
            } else if (wagon[i] == 3) {

                wagon[i] += neededPeople;
                waitingPeople -= neededPeople
            }
        } else {
            if (wagon[i] == 0) {
                neededPeople = 4;
                wagon[i] += neededPeople;
                waitingPeople -= neededPeople;
            } else if (wagon[i] == 1) {
                neededPeople = 3;
                wagon[i] += neededPeople;
                waitingPeople -= neededPeople
            } else if (wagon[i] == 2) {
                neededPeople = 2;
                wagon[i] += neededPeople;
                waitingPeople -= neededPeople
            } else if (wagon[i] == 3) {
                neededPeople = 1;
                wagon[i] += neededPeople;
                waitingPeople -= neededPeople
            }
        }

    }

        let isFull = false;
        for (const spaces of wagon) {
            if(spaces == 4){
                isFull = true;
            } else {
                isFull = false;
            }
        }

        if(isFull && waitingPeople === 0){
            return console.log(wagon.join(' '));
        }

        for (const spaces of wagon) {
            if(spaces < 4){
                console.log(`The lift has empty spots!`);
                return console.log(wagon.join(' '));
            }
        }

        if(waitingPeople > 0){
            console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
            return console.log(wagon.join(' '));
        }

}
theLift([
    "20",
    "0 0 0 0 0"
   ]
   
   );
   