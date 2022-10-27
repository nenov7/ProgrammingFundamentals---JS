function calculator(a,b,operator){
    let multiply = (a,b) => a*b;
    let divide = (a,b) => a/b;
    let add = (a,b) => a + b;
    let subtract = (a,b) => a - b;
    if(operator === 'multiply'){
        console.log(multiply(a,b));
    } else if(operator === 'divide'){
        console.log(divide(a,b));
    } else if(operator === 'add'){
        console.log(add(a,b))
    } else {
        console.log(subtract(a,b))
    }
    
}
calculator(50,
    13,
    'subtract'
    
    );
