function race(racersArray) {
    let namePattern = /[A-Za-z]+/g;
    let distancePattern = /[0-9]+/g;
    let obj = {};
    let people = racersArray.shift();
    let command = racersArray.shift();

    while (command !== 'end of race') {
        let racersName = command.match(namePattern).join('');
        let racersDistance = command.match(distancePattern).join('');
        let distance = 0;
        for (const digit of racersDistance) {
            distance += Number(digit);
        }

        if(people.includes(racersName)){

        if (!obj.hasOwnProperty(racersName)) {
            obj[racersName] = distance;
        } else {
            obj[racersName] += distance;
        }
    }

        command = racersArray.shift()
    }

    let sorted = Object.entries(obj).sort((a,b) => b[1]-a[1]);
    let firstPlace = sorted[0][0]
    let secondPlace = sorted[1][0]
    let thirdPlace = sorted[2][0]
    
    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);

}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']

);