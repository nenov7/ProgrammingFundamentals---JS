function companyUsers(input) {
    let allUsers = {};

    for (const current of input) {
        let [company, user] = current.split(' -> ');

        if (!allUsers.hasOwnProperty(company)) {
            allUsers[company] = [];
        }
        allUsers[company].push(user);
    }

    let sorted = Object.entries(allUsers).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [company, user] of sorted) {
        console.log(company);
        let uniqueIds = new Set(user)

        for (const user of uniqueIds) {
            console.log(`-- ${user}`);
        }
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]

);