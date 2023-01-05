function heartDelivery(input) {

    let houses = input.shift().split('@').map(Number);
    let currIndex = 0;
    let line = input.shift();

    while (line !== 'Love!') {
        let comm = line.split(' ');
        let command = comm[0];
        let index = Number(comm[1]);

        for (let i = 0; i < houses.length; i++) {
            currIndex += index;

            if (currIndex > houses.length - 1) {
                currIndex = 0;
            }

            houses[currIndex] -= 2;

            if (houses[currIndex] === 0) {
                console.log(`Place ${currIndex} has Valentine's day.`);
            }
            if (houses[currIndex] < 0) {
                console.log(`Place ${currIndex} already had Valentine's day.`);
            }
            break;
        }


        line = input.shift();
    }

    console.log(`Cupid's last position was ${currIndex}.`);
    let sum = 0;
    for (const num of houses) {
        sum += num;
    }
    let count = 0;
    if (sum === 0) {
        console.log("Mission was successful.");
    } else {
        for (const num of houses) {
            if (num > 0) {
                count++;
            }
        }
        console.log(`Cupid has failed ${count} places.`);
    }

}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])


    ;