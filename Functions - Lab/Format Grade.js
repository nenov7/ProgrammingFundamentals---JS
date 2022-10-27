function formatGrade(grade){
    let annotation = '';

    if(grade < 3){
        annotation = 'Fail'
    } else if(grade < 3.50){
        annotation = 'Poor'
    } else if(grade < 4.50){
        annotation = 'Good'
    } else if(grade < 5.50){
        annotation = 'Very good'
    } else {
        annotation = 'Excellent'
    }

    if(grade < 3){
        console.log(`${annotation} (2)`);
    } else {
        console.log(`${annotation} (${grade.toFixed(2)})`);
    }
}
formatGrade(4.5)