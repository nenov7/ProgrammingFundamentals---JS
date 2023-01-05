function meetings(input){
    let allMeetings = {};

    for(let comm of input){
        let [day,name] = comm.split(' ');
        
        if(allMeetings[day]){
            console.log(`Conflict on ${day}!`);
        } else {
            allMeetings[day] = name;

            console.log(`Scheduled for ${day}`);
        }
    }

    for(let day in allMeetings){
        console.log(`${day} -> ${allMeetings[day]}`);
    }
}
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

)