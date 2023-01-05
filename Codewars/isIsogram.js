function isIsogram(input){
    let currentLetter = '';

    for(let i = 0; i < input.length;i++){
        let currentLetter = input[i];

        let newArr = input.split(' ');

        if(newArr.shift().includes(currentLetter)){
            console.log(true);
        } else {
            console.log(false);
        }
    }
    
}
isIsogram("moOse");