function convertToJson(inputArr){
    let obj = {
        name: inputArr[0],
        lastName: inputArr[1],
        hairColor: inputArr[2],
    }

   let person = JSON.stringify(obj);
   console.log(person);
}
convertToJson(['George', 'Jones', 'Brown'])