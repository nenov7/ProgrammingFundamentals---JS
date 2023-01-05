function partyTime(input){

    let vipGuests = [];
    let regularGuests = [];

    let currGuest = input.shift();

    while(currGuest !== 'PARTY'){

        if(!isNaN(currGuest[0])){
            vipGuests.push(currGuest);
        } else {
            regularGuests.push(currGuest);
        }
        
        currGuest = input.shift()
    }

    let allGuests = vipGuests.concat(regularGuests);
    
    for (const guest of input) {
        if(allGuests.includes(guest)){
            allGuests.splice(allGuests.indexOf(guest),1)
        }
    }
    
    let notComing = allGuests.length;
    console.log(notComing);

    for (const guest of allGuests) {
        console.log(guest);
    }

}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

);