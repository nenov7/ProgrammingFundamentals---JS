function prime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let primeNumbers = 0;
    let nonPrimeNumbers = 0;
    let isPrime = true;

    while (command !== "stop") {
        let currentNum = Number(command);

        if(currentNum === 0){
            isPrime = true;
        }

        if (currentNum < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;

        }

        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                nonPrimeNumbers += currentNum;
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
        if (isPrime) {
            primeNumbers += currentNum;
        }
    
            command = input[index];
            index++;
    
    

    }
    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`);

}
prime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])




