function towns(input){ 

    let townInfo = [];
    let arrLength = input.length

    for(let i = 0; i < arrLength;i++){
        let [town,latitude,longitude] = input.shift().split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let obj = {};
        obj.town = town;
        obj.latitude = latitude;
        obj.longitude = longitude;
        townInfo.push(obj);

        console.log(obj);
        // console.log(`town: ${town}, latitude: ${latitude}, longitude: ${longitude}`);
    }

    
}
towns(['Sofia | 42.696552 | 23.32601',
       'Beijing | 39.913818 | 116.363625']
)