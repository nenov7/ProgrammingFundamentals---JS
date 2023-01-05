function shop(input)
{
let fruitType = input[0];
let day = input[1];
let quantity = Number(input[2]);

let banana = 0;
let apple = 0;
let orange = 0;
let grapefruit = 0;
let kiwi = 0;
let pineapple = 0;
let grapes = 0;

if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
    if(fruitType === "banana"){
        banana = 2.5 * quantity
        console.log(banana.toFixed(2))
    } else if(fruitType === "apple"){
        apple = 1.2 * quantity
        console.log(apple.toFixed(2))
    } else if(fruitType === "orange"){
        orange = 0.85 * quantity
        console.log(orange.toFixed(2))
    } else if(fruitType === "grapefruit"){
        grapefruit = 1.45 * quantity
        console.log(grapefruit.toFixed(2))
    } else if(fruitType === "kiwi"){
        kiwi = 2.7 * quantity
        console.log(kiwi.toFixed(2))
    } else if(fruitType === "pineapple"){
        pineapple = 5.5 * quantity
        console.log(pineapple.toFixed(2))
    } else if(fruitType === "grapes"){
        grapes = 3.85 * quantity
        console.log(grapes.toFixed(2))
    } else{
        console.log("error")
    }
} else if(day === "Saturday" || day === "Sunday"){
    if(fruitType === "banana"){
        banana = 2.7 * quantity
        console.log(banana.toFixed(2))
    } else if(fruitType === "apple"){
        apple = 1.25 * quantity
        console.log(apple.toFixed(2))
    } else if(fruitType === "orange"){
        orange = 0.90 * quantity
        console.log(orange.toFixed(2))
    } else if(fruitType === "grapefruit"){
        grapefruit = 1.60 * quantity
        console.log(grapefruit.toFixed(2))
    } else if(fruitType === "kiwi"){
        kiwi = 3 * quantity
        console.log(kiwi.toFixed(2))
    } else if(fruitType === "pineapple"){
        pineapple = 5.6 * quantity
        console.log(pineapple.toFixed(2))
    } else if(fruitType === "grapes"){
        grapes = 4.20 * quantity
        console.log(grapes.toFixed(2))
    } else{
        console.log("error")
    }
} else{
    console.log("error")
}


}
shop(["tomato",
"Monday",
"0.5"])



;