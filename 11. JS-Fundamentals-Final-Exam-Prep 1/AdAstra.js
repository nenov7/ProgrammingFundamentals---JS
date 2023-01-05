function adAstra(input) {
    let text = input.shift();
    let caloriesPerDay = 2000;
    let caloriesOnBoard = 0;

    let pattern = /([#|])(?<name>[a-zA-Z ]+)\1(?<expDate>\d{2}[\/]{1}\d{2}[\/]{1}\d{2})\1(?<calories>\d+)\1/gm

    let matches = text.matchAll(pattern);
    let print = text.matchAll(pattern);

    for (const iterator of matches) {
        caloriesOnBoard += Number(iterator.groups.calories);
    }

    let days = Math.floor(caloriesOnBoard / caloriesPerDay)
    console.log(`You have food to last you for: ${days} days!`);

    for (const meet of print) {
        console.log(`Item: ${meet.groups.name}, Best before: ${meet.groups.expDate}, Nutrition: ${meet.groups.calories}`);
    }
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);