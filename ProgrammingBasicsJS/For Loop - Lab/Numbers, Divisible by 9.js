function division(input){

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let sum = 0;
    let output = '';


    for (i = n1; i>=n1 && i<=n2; i++){
        if(i % 9 === 0){
            sum += i;
            output +=i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(output)
  
}
division(["100", "200"]);