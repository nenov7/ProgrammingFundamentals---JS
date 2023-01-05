function op(input){

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator= input[2];

    let sum;
    let evenOrOdd;

    // "{N1} {оператор} {N2} = {резултат} – {even/odd}"

    if(operator === "+"){
        sum = n1 + n2;
        if(sum % 2 === 0){
            evenOrOdd = "even"
        } else{
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${sum} - ${evenOrOdd}`)
    } else if(operator === "-"){
        sum = n1 - n2;
        if(sum % 2 === 0){
            evenOrOdd = "even"
        } else{
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${sum} - ${evenOrOdd}`)
    } else if(operator === "*"){
        sum = n1 * n2;
        if(sum % 2 === 0){
            evenOrOdd = "even"
        } else{
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${sum} - ${evenOrOdd}`)
    } else if(operator === "/"){
        if(n2 === 0){
            console.log(`Cannot divide ${n1} by zero`);
        } else{
            sum = n1 / n2;
            console.log(`${n1} / ${n2} = ${(sum).toFixed(2)}`);
        }
    } else if(operator === "%"){
        if(n2 === 0){
            console.log(`Cannot divide ${n1} by zero`);
        } else{
            sum = n1 % n2;
            console.log(`${n1} % ${n2} = ${sum}`);
        }
    }
}
op(["123",
"12",
"/"])







;