function stringSubstring(word, text) {
    // make array to check every word.
    let textArr = text.split(' ');
    // the word should be case insensitive, but keep the original to print.
    let checkA = word.toLowerCase()
    let isFound = false
    // if word is found stop the program and make isFound: true.
    for (const element of textArr) {
        let checkB = element.toLowerCase()
        if (checkA == checkB) {
            isFound = true
            break;
        }
    }

    if (isFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('python',
    'JavaScript is the best programming language'


)