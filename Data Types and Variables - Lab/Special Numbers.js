function specNumbers(number){
    let sum = 0;

    for (let i = 1;i<=number;i++){
        let m = i.toString();
        for(let j = 0; j<m.length;j++){
            sum += Number(m[j]);

        }
        if(sum===5||sum===7||sum===11){
            console.log(`${i} -> True`);
            sum = 0;
        } else {
            console.log(`${i} -> False`);
            sum = 0;
        }
    }

}
specNumbers(20);