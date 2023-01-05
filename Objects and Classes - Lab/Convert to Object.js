function convertToObject(inputArr){
    let arrToStr = inputArr.join('');
    
    let person = JSON.parse(arrToStr);
    for(let key in person){
        console.log(`${key}: ${person[key]}`);
    }
}
convertToObject(['{"name": "George", "age": 40, "town": "Sofia"}']);