function charactersInRange(firstChar,lastChar){
    let startChar = Math.min(firstChar.charCodeAt(),lastChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(),lastChar.charCodeAt());
    let result = '';

    for(let i = startChar + 1;i<endChar;i++){
        let currentChar = String.fromCharCode(i)
        result += `${currentChar} `;
    }

    console.log(result);
}
charactersInRange(':',
'#'


);