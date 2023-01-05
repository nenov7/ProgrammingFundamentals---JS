function demo ([a, b, c]){

let pagesCount = a;
let pagesPerHour = b;
let daysNeeded = c;

let timeNeeded = pagesCount / pagesPerHour;
let hoursPerDay = timeNeeded / daysNeeded;

console.log(hoursPerDay);

}
demo(212, 20, 2);