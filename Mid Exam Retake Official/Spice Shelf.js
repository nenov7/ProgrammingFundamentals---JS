function solve(input) {
    let spices = input.shift().split(', ');

    let line = input.shift();

    while (line !== 'done') {
        line = line.split(' ');
        let command = line[0];

        if (command === 'AddSpice') {
            let spice = line[1];
            if (!spices.includes(spice)) {
                spices.push(spice);
            }
        } else if (command === 'AddManySpices') {
            let index = Number(line[1]);
            if (index >= 0) {
                let currentWord = spices[index];
                let additionalSpices = line[2].split('|');
                for (let currentSpice of additionalSpices) {
                    if (!spices.includes(currentSpice)) {
                        spices.splice(spices.indexOf(currentWord), 0, currentSpice);
                    }
                }
            }


        } else if (command === 'SwapSpices') {
            let firstSpice = line[1];
            let secondSpice = line[2];
            let index1 = spices.indexOf(firstSpice);
            let index2 = spices.indexOf(secondSpice);

            if (spices.includes(firstSpice) && spices.includes(secondSpice)) {
                spices.splice(index1, 1, secondSpice);
                spices.splice(index2, 1, firstSpice);
            }
        } else if (command === 'ThrowAwaySpices') {
            let spice = line[1];
            let toRemove = Number(line[2]);

            if (spices.includes(spice)) {
                if (toRemove >= 0) {
                    spices.splice(spices.indexOf(spice), toRemove);
                }

            }
        } else if (command === 'Arrange') {
            spices.sort((a, b) => a.localeCompare((b)))
        }

        line = input.shift();
    }

    console.log(spices.join(' '));
}
solve(['coriander, cloves, paprika, cumin',
    'AddSpice nutmeg',
    'AddSpice anise',
    'AddSpice turmeric',
    'AddSpice cumin',
    'SwapSpices coriander paprika',
    'ThrowAwaySpices cumin 4',
    'Arrange',
    'done'])




