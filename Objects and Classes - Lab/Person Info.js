function personInfo(input) {
    let info = {
        firstName: input[0],
        lastName: input[1],
        age: input[2],
    }

    for (let key in info) {
        console.log(`${key}: ${info[key]}`);
    }
}
personInfo("Peter",
    "Pan",
    "20")