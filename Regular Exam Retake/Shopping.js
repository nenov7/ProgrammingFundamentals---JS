function shopping(input) {
    let allStores = {};
    let isImportant = true;
    let oldArr = []
    let important = []

    let line = input.shift();

    while (line !== 'Go Shopping') {
        let [command, store, items] = line.split('->');

        if (command === 'Add') {
            for (const currItem of items.split(',')) {
                if (!allStores[store]) {
                    allStores[store] = [];
                    isImportant = false;
                }
                if(!oldArr.includes(currItem)){
                    oldArr.push(currItem);
                    allStores[store].push(currItem);
                    isImportant = false;
                }

            }

        } else if (command === 'Important') {
            important.push(items);
            if (!allStores[store]) {
                allStores[store] = [];
            }
            allStores[store].unshift(items);
            isImportant = true;
        } else if (command === 'Remove') {
            if (important.includes(items)) {
                delete allStores[store];
            }
        }
        line = input.shift();

    }
    let newArr = [];
    for (const store in allStores) {
        console.log(`${store}:`);
        for (const item of allStores[store]) {
            if (!newArr.includes(item)) {
                newArr.push(item);
                console.log(`- ${item}`);
            }


        }
    }
}

shopping(["Add->Peak->Batteries,Umbrella",
"Add->Groceries->Water,Juice,Food",
"Add->Peak->Water",
"Go Shopping"])





    ;