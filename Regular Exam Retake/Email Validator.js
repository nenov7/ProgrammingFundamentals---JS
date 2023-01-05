function emailValidator(input){

    let email = input.shift();

    let command = input.shift();

    while(command !== 'Complete'){

        if(command.startsWith('Make') && command.endsWith('Upper')){
            email = email.toUpperCase();
            console.log(email);
        } else if(command.startsWith('Make') && command.endsWith('Lower')){
            email = email.toLowerCase();
            console.log(email);
        } else if(command.startsWith('GetDomain')){
            let [comm,count] = command.split(' ');
            count = Number(count);
            console.log(email.substring(email.length-3));
        } else if(command === 'GetUsername'){
            if(!email.includes('@')){
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            } else {
               console.log(email.substring(0,email.indexOf('@'))); 
            }
        } else if(command.startsWith('Replace')){
            let [comm,char] = command.split(' ');
            let replacement = '-';
            while(email.includes(char)){
                email=email.replace(char,replacement);
            }
            console.log(email);
        } else if(command === 'Encrypt'){
            let arr = [];
            let asciiValue = 0; 

            for(let i = 0; i < email.length;i++){
                asciiValue = email[i].charCodeAt();
                arr.push(asciiValue);
            }
            console.log(arr.join(' '));
        }

        command = input.shift();
    }
}
emailValidator(["Another@Mail.com", 
"Make Lower", 
"GetUsername", 
"GetDomain 3", 
"Encrypt", 
"Complete"]) 

;