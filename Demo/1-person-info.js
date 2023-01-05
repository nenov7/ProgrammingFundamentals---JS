function printInfo(firstName, lastName, age) {
    let info = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
    
    for (let key of Object.keys(info)) {
        console.log(`${key}: ${info[key]}`);
    }
    
}

printInfo("Peter", 
"Pan",
"20"
);
