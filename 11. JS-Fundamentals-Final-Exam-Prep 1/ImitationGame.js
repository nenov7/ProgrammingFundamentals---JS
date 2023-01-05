function imitationGame(input) {
    let encryptedMessage = input.shift()
    let data = input.shift();

    while (data !== 'Decode') {
        data = data.split('|');
        let command = data[0];

        switch (command) {
            case 'Move':
                let letersToMove = Number(data[1]);
                if (letersToMove > 0) {
                    let stringToMoveAtTheEnd = encryptedMessage.slice(0, letersToMove);
                    let stringLeftOver = encryptedMessage.slice(letersToMove);
                    encryptedMessage = stringLeftOver.concat(stringToMoveAtTheEnd);
                }
                break;

            case 'Insert':
                let indexToInsert = Number(data[1]);
                let valueToInsert = data[2];
                if (indexToInsert >= 0 && valueToInsert.length > 0) {
                    let firstPart = encryptedMessage.slice(0, indexToInsert);
                    let lastPart = encryptedMessage.slice(indexToInsert);
                    encryptedMessage = firstPart.concat(valueToInsert, lastPart);
                }
                break;

            case 'ChangeAll':
                let textToReplace = data[1];
                let replaceWith = data[2];
                while (encryptedMessage.includes(textToReplace)) {
                    encryptedMessage = encryptedMessage.replace(textToReplace, replaceWith);
                }
                break;
        }
        data = input.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage} `);

}
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);