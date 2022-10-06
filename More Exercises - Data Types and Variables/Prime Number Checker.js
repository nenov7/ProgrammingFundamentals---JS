function primeNumberChecker(number){

    if(number <= 0){
        console.log(true);
    }
    else if((number % 2 === 0 || number % 3 === 0) && number !== 2 && number !== 3){
        console.log(false);
    } else {
        console.log(true);
    }
    

}
primeNumberChecker(-1);