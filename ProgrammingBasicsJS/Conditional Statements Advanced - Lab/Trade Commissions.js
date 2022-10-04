function tradeCommision (input){

    let city = input[0];
    let sales = Number(input[1]);
    let commision = 0;

    // Град	    0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
    // Sofia	   5%	          7%	            8%	        12%
    // Varna	   4.5%	         7.5%	            10%	        13%
    // Plovdiv	   5.5%	          8%	            12%	        14.5%
    if(sales < 0){
        console.log('error')}
        else{
   
    if(city === "Sofia"){
        
        
        
     if(sales <= 500){
            commision = 0.05 * sales;
            console.log(commision.toFixed(2));
        } else if(sales <= 1000){
            commision = 0.07 * sales;
            console.log(commision.toFixed(2));
        } else if(sales <= 10000){
            commision = 0.08 * sales;
            console.log(commision.toFixed(2));
        } else if(sales > 10000){
            commision = 0.12 * sales;
            console.log(commision.toFixed(2));
        } else{
            console.log("error")
        }
        
    }else if(city === "Varna"){
        if(sales >=0 && sales <= 500){
            commision = 0.045 * sales;
            console.log(commision.toFixed(2));
        } else if(sales <= 1000){
            commision = 0.075 * sales;
            console.log(commision.toFixed(2));
        } else if(sales <= 10000){
            commision = 0.10 * sales;
            console.log(commision.toFixed(2));
        } else if(sales > 10000){
            commision = 0.13 * sales;
            console.log(commision.toFixed(2));
        } else{
            console.log("error")
        }
    } else if(city === "Plovdiv"){
        if(sales >=0 && sales <= 500){
            commision = 0.055 * sales;
            console.log(commision.toFixed(2));
        } else if(sales <= 1000){
            commision = 0.08 * sales;
            console.log(commision.toFixed(2));
        } else if(sales <= 10000){
            commision = 0.12 * sales;
            console.log(commision.toFixed(2));
        } else if(sales > 10000){
            commision = 0.145 * sales;
            console.log(commision.toFixed(2));
        } else{
            console.log("error")
        }
    } else {
        console.log("error")
    }
}

}
tradeCommision(["Varna",
"3874.50"])
;


