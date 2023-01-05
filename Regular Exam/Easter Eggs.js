function easterEggs(input){
    let pattern = /[@|#]+(?<color>[a-z]{3,})[@|#]+[^a-z\d]+[\/]+(?<amount>\d+)[\/]+/g;
    let inputToString = input.join('');
    let exec = pattern.exec(inputToString);

    while(exec){
        let color = exec.groups['color'];
        let amount = exec.groups['amount']
        console.log(`You found ${amount} ${color} eggs!`);
        
        exec = pattern.exec(inputToString);
    }

}
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);