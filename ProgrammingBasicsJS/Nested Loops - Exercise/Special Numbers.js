function specialNumbers(input){
    let number = Number(input[0]);
    let canBeDivided = false;

    let specialNumbers = '';
    for(let i = 1; i <=9;i++){
        for(let m = 1; m<=9;m++){  
            for(let n = 1;n<=9;n++){
                for(let j = 1;j<=9;j++){
                    if(number % i === 0 && number % m === 0 && number % n === 0 && number % j === 0){
                        specialNumbers+= `${i}${m}${n}${j} `;
                    }
                }

        } 
            
        }
        }
        console.log(specialNumbers)
    }
    

specialNumbers(["16"]);