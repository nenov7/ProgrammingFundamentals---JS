function suppliesForSchool(input){
let pensCount = Number(input[0])
let markersCount = Number(input[1])
let preparatLiters = Number(input[2])
let discountPercent = Number(input[3])

let pensPrice = pensCount * 5.80;
let markersPrice = markersCount * 7.20;
let preparatPrice = preparatLiters * 1.20;
let discount = discountPercent / 100;

let sumMaterials = pensPrice + markersPrice + preparatPrice;
let sumWithDiscount = sumMaterials - (sumMaterials * discount);

console.log(sumWithDiscount)

}
suppliesForSchool(["4 ","2 ","5 ","13 "]);