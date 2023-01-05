function employees(arr){

    let employeeList= [];

    arr.forEach(element => {
        let obj = {};
        obj.name = element;
        obj.number = element.length;
        employeeList.push(obj);
        
    });

    employeeList.forEach(printPerson => {
        console.log(`Name: ${printPerson.name} -- Personal Number: ${printPerson.number}`);
    })

    

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );