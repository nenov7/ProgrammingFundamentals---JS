function pyramid(input) {
    let number = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let currLine = '';

    for (let rows = 1; rows <= number; rows++) {
        for (let columns = 1; columns <= rows; columns++) {
            if (current > number) {
                isBigger = true;
                break;
            }
            currLine += current + ' ';
            current++;

        }
        console.log(currLine);
        currLine = '';
        if(isBigger){
            break;
        }
    }

}
pyramid(["23"])