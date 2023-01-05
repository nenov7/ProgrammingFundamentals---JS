function censored(sentence, word){
    let text = sentence;


    while(text.includes(word)){
        text = text.replace(word, '*'.repeat(word.length))
    }

    console.log(text);

}
censored('Find the hidden word', 'hidden');