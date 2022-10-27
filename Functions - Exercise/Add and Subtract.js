function addAndSub(a,b,c) {

    function sum(a, b) {
        let result = a + b;
        return result;
    }

    let sumOfSum = sum(a,b);

    function sub(sumOfSum, c) {
        let otherResult = sumOfSum - c;
        return otherResult;
    }

    let subOfSub = sub(sumOfSum, c);
    console.log(subOfSub);



}
addAndSub(42,
    58,
    100
    
    
);