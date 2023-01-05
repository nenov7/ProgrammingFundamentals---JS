function createPhoneBook(input){

    let phoneBook = {};

    for(let comm of input){
        let [name,phone] = comm.split(' ');
        phoneBook[name] = phone;
    }

    for(let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
createPhoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']

);