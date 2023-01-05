function numbersK(arrNums) {
    let count = arrNums.shift();   // taking and removing first element
    let firstElements = arrNums.slice(0,count);
    let lastElements = arrNums.slice(arrNums.length - count);

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}
numbersK([2, 
    7, 8, 9]
    
    
   );