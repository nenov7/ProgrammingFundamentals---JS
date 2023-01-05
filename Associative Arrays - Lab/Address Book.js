function addressBookSolve(input){
    let addressBook = {};

    for(let comm of input){
        let [name,adress] = comm.split(':');
        addressBook[name] = adress;
    }

    let adresBookListArray = Object.entries(addressBook);
    adresBookListArray.sort(([nameA],[nameB]) => nameA.localeCompare(nameB));

    adresBookListArray.forEach(row =>{
        let [name,adress] = row;
        console.log(`${name} -> ${adress}`);
    })

}
addressBookSolve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

);