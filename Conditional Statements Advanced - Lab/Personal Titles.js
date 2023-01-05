function x(input){
let age = Number(input[0]);
let sex = input[1];

// •	"Mr." – мъж (пол 'm') на 16 или повече години
// •	"Master" – момче (пол 'm') под 16 години
// •	"Ms." – жена (пол 'f') на 16 или повече години
// •	"Miss" – момиче (пол 'f') под 16 години

if(age >= 16){
    if(sex === "m"){
        console.log("Mr.")
    } else if (sex === "f"){
        console.log("Ms.")
    }
} else {
    if(sex === "m"){
        console.log("Master")
    } else if (sex === "f"){
        console.log("Miss")
    }
}


}
x(["13.5",
"m"])

;