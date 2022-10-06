function login(input) {
    let index = 0;
    let username = input[index];
    index++;

    let splitPassword = username.split('');
    let reversePassword = splitPassword.reverse();
    let joinPassword = reversePassword.join('');
    let isBlocked = false;
    let command = '';

    while (command !== joinPassword) {
        command = input[index];
        if(index === 4 && command !==joinPassword){
            isBlocked = true;
            break;
        }
        if(command !== joinPassword){
            console.log(`Incorrect password. Try again.`);
        } else {
            isBlocked = false;
            break;
        }
        
        index++;
    }
    

    if(isBlocked){
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }



}
login(['momo','omom']);