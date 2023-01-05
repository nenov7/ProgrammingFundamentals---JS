function matchName(input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let text = input.match(pattern);

    console.log(text.join(' '));
}
matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");