function solve (input){

    let booksCount = 0;
    let index = 0;
    let theRightBook = input[index];
    index++;
    let bookFound = input[index];
    index++;

    while(theRightBook !== bookFound){
         bookFound = input[index];
         booksCount++;

         if(bookFound === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${booksCount} books.`);
            break;
         }
         index++;
    }
    if(theRightBook === bookFound){
        console.log(`You checked ${booksCount} books and found it.`)
    }

}
solve(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])





;