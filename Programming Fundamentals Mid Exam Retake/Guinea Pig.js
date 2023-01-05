function guineaPig(input){
    let foodQty = Number(input[0]) * 1000;
    let hayQty = Number(input[1])* 1000;
    let coverQty =  Number(input[2])* 1000;
    let weight = Number(input[3])* 1000;

    let days = 30;

    for(let i = 1; i <= days;i++){
        foodQty-=300;
        if(i % 2 === 0){
            hayQty -= foodQty * 0.05;
        }
        if(i % 3 === 0){
            coverQty -= weight / 3;
        }

        if(foodQty <= 0 || hayQty <= 0 || coverQty <=0){
            return console.log("Merry must go to the pet store!");
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(foodQty / 1000).toFixed(2)}, Hay: ${(hayQty / 1000).toFixed(2)}, Cover: ${(coverQty / 1000).toFixed(2)}.`);
}
guineaPig(["9",
"5",
"5.2",
"1"])

;