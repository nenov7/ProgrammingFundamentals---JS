function wordTracker(wordsArray) {
    let result = {};
    let searchedWords = wordsArray.shift().split(' ');

    for (const word of searchedWords) {
        result[word] = 0;
    }

    for (const currWord of wordsArray) {
        if(result.hasOwnProperty(currWord)){
            result[currWord]++;
        }
    }
    let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]);

    for (const [word,count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}
wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
);