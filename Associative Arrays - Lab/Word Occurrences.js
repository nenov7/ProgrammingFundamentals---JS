function wordOccurrences(input){
    let words = {};
    
    for(let word of input){

        if(!words[word]){
            words[word] = 0
        }
        words[word]++;
    }

    let sortedWords = Object.entries(words).sort((a,b) => b[1] - a[1]);

    for(let [currWord,count] of sortedWords){
        console.log(`${currWord} -> ${count} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", 
"another", "sentence", "And", "finally", "the", "third", "sentence"])