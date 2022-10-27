function loadingBar(num){
    let percentage = '%'.repeat(num / 10);
    let dotsCount = '.'.repeat(10 - (num/10));

    if(num === 100){
        console.log('100% Complete!');
    } else {
        console.log(`${num}% [${percentage}${dotsCount}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(50);