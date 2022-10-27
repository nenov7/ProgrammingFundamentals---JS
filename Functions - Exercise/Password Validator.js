function passValidator(pass) {
    let passwordLength = pass.length;
    let digitCounter = 0;

    let isDigit;
    let isSmallLetter;
    let isBigLetter;
    let isValid = true;
    let isSymbol = false;

    for (let i = 0; i < passwordLength; i++) {
        let currentChar = pass[i].charCodeAt();

        isDigit = currentChar >= 48 && currentChar <= 57;
        isSmallLetter = currentChar >= 97 && currentChar <= 122;
        isBigLetter = currentChar >= 65 && currentChar <= 90;

        if (isDigit) {
            digitCounter++;
        }
        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true;

        }
    }
    if (passwordLength < 6 || passwordLength > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (isSymbol) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }
    if (isValid) {
        console.log('Password is valid');
    }

}

passValidator('MyPass123');