function repeatString(text, count){
    let result = '';

    for(let i = 0;i<count;i++){
        result+= text;
    }
    return result;
}
repeatString()
let resulted = repeatString("abc", 3);
console.log(resulted);

