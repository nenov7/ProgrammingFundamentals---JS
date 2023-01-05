function revealWords(currWord, template) {
    let splittedWords = currWord.split(', ');
    let text1 = template;

    for (let word of splittedWords) {

        if (text1.includes('*'.repeat(word.length))) {
            text1 = text1.replace('*'.repeat(word.length), word)
        }

    }

    console.log(text1);

}
revealWords('great',
    'softuni is ***** place for learning new programming languages'


);