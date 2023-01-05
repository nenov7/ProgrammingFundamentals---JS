function theRace(input){
    let pattern = /([#$%*&])([A-Za-z]+)\1=(\d+)!!(.+)/g;

    let currLine = input.shift();
    let exec = pattern.exec(currLine);

    while(currLine){

        if(exec){
        let name = exec[2];
        let geoLength=Number(exec[3]);
        let geo = exec[4];
        if(geoLength !== geo.length){
            console.log('Nothing found!');
        } else {
            let newCode = '';
            for(let char of geo){
            let charCode = char.charCodeAt() + geoLength;
            newCode+= String.fromCharCode(charCode);
            
            }
            console.log(`Coordinates found! ${name} -> ${newCode}`);
            return;
        }
        } else{
            console.log('Nothing found!');
        }
        currLine = input.shift();
        exec = pattern.exec(currLine);
        
}
}
theRace(["%GiacomoAgostini%=7!!hbqw",
"&GeoffDuke*=6!!vjh]zi",
"JoeyDunlop=10!!lkd,rwazdr",
"Mike??Hailwood=5!![pliu",
"#SteveHislop#=16!!df%TU[Tj(h!!TT[S"])

;