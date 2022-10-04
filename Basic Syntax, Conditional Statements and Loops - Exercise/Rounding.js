function solve(num, decimal){
    if(decimal>15){
        decimal= 15;
    }
console.log(parseFloat(num.toFixed(decimal)));

}
solve(3.1415926535897932384626433832795,14)