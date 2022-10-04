function building(input){

    let floorCount = Number(input[0]);
    let roomCount = Number(input[1]);

    for(let i = floorCount;i>=1;i--){
        let res = '';
        for(let x = 0; x<roomCount;x++){
            if(i === floorCount){
                res+= `L${i}${x} `
            } else if(i % 2 === 0){
                res+= `O${i}${x} `
            } else {
                res+= `A${i}${x} `
            }
        }
        console.log(res);
    }
}
building(["6", "4"]);