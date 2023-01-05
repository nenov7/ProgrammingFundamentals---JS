function lastKnums(n, k){
    let newArr = [1];

    for(let i = 1; i < n;i++){
        let index = Math.max(newArr.length - k,0)

         let lastElement = newArr.slice(index);
         let sum = 0; 

         for (let el of lastElement) {
            sum+=el;
         }

         newArr.push(sum);

    }
    console.log(newArr.join(' '));
}
lastKnums(8,2);