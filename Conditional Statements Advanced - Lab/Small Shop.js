function shop(input){

let product = input[0];
let city = input[1];
let quantity = input[2];

let coffeePrice = 0;
let beerPrice = 0;
let waterPrice =0;
let peanutsPrice = 0;
let sweetsPrice = 0;

// град / продукт	coffee	water	beer	sweets	Peanuts
// Sofia	        0.50	0.80  	1.20	 1.45	  1.60
// Plovdiv	        0.40	0.70	1.15	 1.30	  1.50
// Varna            0.45	0.70	1.10	1.35	1.55


if (city === "Sofia"){
coffeePrice = 0.5 * quantity;
waterPrice = 0.8 * quantity;
beerPrice = 1.2 * quantity;
sweetsPrice = 1.45 * quantity;
peanutsPrice = 1.60 * quantity
} 
else if (city === "Plovdiv"){
coffeePrice = 0.4 * quantity;
waterPrice = 0.7 * quantity;
beerPrice = 1.15 * quantity;
sweetsPrice = 1.30 * quantity;
peanutsPrice = 1.50 * quantity;
}
else {
    coffeePrice = 0.45 * quantity;
    waterPrice = 0.7 * quantity;
    beerPrice = 1.10 * quantity;
    sweetsPrice = 1.35 * quantity;
    peanutsPrice = 1.55 * quantity;
}

if(product === "coffee"){
    console.log(coffeePrice)
} else if(product === "water"){
    console.log(waterPrice)
}else if(product === "beer"){
    console.log(beerPrice)
} else if(product === "sweets"){
    console.log(sweetsPrice)
} else {
    console.log(peanutsPrice)
}




}
shop(["sweets",
"Sofia",
"2.23"])




;