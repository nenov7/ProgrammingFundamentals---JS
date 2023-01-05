function sumNumbers(input){

let index = 0;
let firstNum = Number(input[index]);
let sum = 0;
index++;
while(sum<firstNum){
     let otherNum = Number(input[index]);
     index++;
     sum+=otherNum;
}
console.log(sum);

}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

;