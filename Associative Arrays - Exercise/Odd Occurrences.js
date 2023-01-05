function oddOccurences(input){
    let allWords = input.split(' ')
    .map(x => x.toLowerCase());

    let result = {};

    for (const word of allWords) {
        if(!result.hasOwnProperty(word)){
            result[word] = 0;
        }
        result[word]++;
    }

    let res = '';

    let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]);
    
    for (const [word,count] of sorted) {
        if(count % 2 !== 0){
            res+= `${word} `
        }
    }
    console.log(res);
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');