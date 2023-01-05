function sortAnArray2Criteria(arr){

    let sortedArr = arr.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    })
    console.log(sortedArr.join('\n'));
}
sortAnArray2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);