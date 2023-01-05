function cinema(input){
let projectionType = input[0];
let rows = Number(input[1]);
let columns = Number(input[2]);

let allPlaces = rows * columns;


// •	Premiere – премиерна прожекция, на цена 12.00 лева.
// •	Normal – стандартна прожекция, на цена 7.50 лева.
// •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.

if(projectionType === "Premiere"){
    allPlaces*=12;
}else if(projectionType === "Normal"){
    allPlaces*=7.5;
} else {
    allPlaces *=5;
}

console.log(allPlaces.toFixed(2));

}
cinema(["Discount",
"12",
"30"])


;