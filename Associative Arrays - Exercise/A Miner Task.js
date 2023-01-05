function minerTask(input){
    let result = {};

    for(let i = 0; i < input.length;i+=2){
        let resource = input[i];
        let quantity = Number(input[i+1]) 

        if(!result.hasOwnProperty(resource)){
            result[resource] = 0
        }

        result[resource]+=quantity;
    }

    for(let resource in result){
        console.log(`${resource} -> ${result[resource]}`);
    }
    
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
);