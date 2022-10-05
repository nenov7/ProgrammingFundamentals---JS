function integerOrFloat(first,second,third){
    let sum = first + second + third;
    Number.isInteger(sum);

    if(Number.isInteger(sum)){
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }


}
integerOrFloat(9, 100, 1.1);