function palindromeIntegers(arr){
    
    let isPalindrome = false;
    
    for (let i = 0;i<arr.length;i++){
        
        let splittedNum = arr[i].toString().split('').reverse().join('')
        
        if(Number(splittedNum) === arr[i]){
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
        
        console.log(isPalindrome);
    }

}
palindromeIntegers([32,2,232,1010]);