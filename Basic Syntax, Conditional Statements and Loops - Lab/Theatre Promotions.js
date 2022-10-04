function solve(day, age) {
    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    if (age >= 0 && age <= 18) {
        switch (day) {
            case "Weekday":
                console.log("12$")
                break;
            case "Holiday":
                console.log("5$")
                break;
            case "Weekend":
                console.log("15$")
                break;
            default:
                break;

        }

    } else if (age <= 64) {
        switch(day){
            case "Weekday":
                console.log("18$")
                break;
            case "Holiday":
                console.log("12$")
                break;  
            case "Weekend":
                console.log("20$")
                break;   
            default:
                break;
            }

    } else { 
        switch(day){
            case "Weekday":
                console.log("12$")
                break;
            case "Holiday":
                console.log("10$")
                break;  
            case "Weekend":
                console.log("15$")
                break;   
            default:
                break;

    }

}
}
solve('Holiday', 15
);