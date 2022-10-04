function repainting (input){
let nailon = Number(input[0])
let boq = Number(input[1])
let razreditel = Number(input[2])
let hours = Number(input[3])

let nailonPrice = (nailon + 2) * 1.50
let boqPrice = (boq + 0.1 * boq)* 14.50
let razreditelPrice = razreditel * 5.00
let torbichki = 0.40;

let sumMaterials = nailonPrice + boqPrice + razreditelPrice + torbichki
let sumPerHour = hours * (0.3 * sumMaterials)

let wholeSum = sumMaterials + sumPerHour
console.log(`The whole sum is ${wholeSum} leva. `)


}
repainting(["5 ","10 ","10 ","1 "]);