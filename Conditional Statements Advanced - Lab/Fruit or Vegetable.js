function x(input){
    let product = input[0];

// •	Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes
// •	Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
// •	Всички останали са "unknown"    
switch(product){
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
        console.log("fruit")
        break;   
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
        console.log("vegetable")
        break;
        default:
            console.log("unknown")
            break; 
}

}
x(["water"]);