function x(input){

    let number = input[0];
    let sum = 0;

    for (i = 0; i < number.length; i++){
        let num = Number(number[i]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`);

}
x(["564891"]);