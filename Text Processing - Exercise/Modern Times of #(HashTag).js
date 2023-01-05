function wordsWithTag(string) {
    let stringArray = string.split(' ');

    stringArray.forEach(word => {
        // check if word starts with #
        let isValid = word.startsWith('#');
        // if the word starts with # and is not only #, enter.
        if (isValid && word.length > 1) {
            // check if the word is only from letters.
            let wordCopy = word.toLowerCase();
            let print = '';
            for (let index = 1; index < word.length; index++) {
                if (wordCopy[index].charCodeAt() < 97 || wordCopy[index].charCodeAt() > 122) {
                    isValid = false;
                    break;
                }
                print += word[index];
            }
            // if the word starts with #, is not only # and is only from letters print it.
            if (isValid) {
                console.log(print);
            }
        }
    });
}
wordsWithTag('Nowadays everyone uses # to tag a #special word in #socialMedia');