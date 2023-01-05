function vowels (input){

    let word = input[0];
    let sum = 0;

    for (i = 0; i< word.length;i++){
         let letter = word[i];
         if(letter === "a"){
            sum++;
         }
         if(letter === "e"){
            sum +=2;
         }
         if(letter === "i"){
            sum +=3;
         }
         if(letter === "o"){
            sum +=4
         }
         if(letter === "u"){
            sum +=5
         }
         
    }
    console.log(sum);

}
vowels(["beer"]);