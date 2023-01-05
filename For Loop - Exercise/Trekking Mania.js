function trekking(input){
   
let index = 0;
let groupCount = Number(input[index]);
index++;
let peopleInGroup = 0;
let peopleCount = 0;

let musala = 0;
let monblan = 0;
let kilimandjaro = 0;
let k2 = 0;
let everest = 0;

for(i=0; i<groupCount; i++){
     peopleInGroup = Number(input[index]);
     index++;
     peopleCount += peopleInGroup;

     if(peopleInGroup<=5){
         musala+=peopleInGroup;
     } else if(peopleInGroup<=12){
        monblan+=peopleInGroup;
     } else if(peopleInGroup<=25){
        kilimandjaro+=peopleInGroup;
     } else if(peopleInGroup<=40){
        k2+=peopleInGroup;
     } else {
        everest+=peopleInGroup;
     }

}
let musalaPercent = musala / peopleCount * 100;
let monblanPercent = monblan / peopleCount * 100;
let kilimandjaroPercent = kilimandjaro / peopleCount * 100;
let k2Percent = k2 / peopleCount * 100;
let everestPercent = everest / peopleCount * 100;

console.log(`${musalaPercent.toFixed(2)}%`);
console.log(`${monblanPercent.toFixed(2)}%`);
console.log(`${kilimandjaroPercent.toFixed(2)}%`);
console.log(`${k2Percent.toFixed(2)}%`);
console.log(`${everestPercent.toFixed(2)}%`);

}
trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

;