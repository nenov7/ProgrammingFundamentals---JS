function nxnMatrix(num){

    let result = '';

    for(let i = 0; i < num;i++){
        result += `${num} `;
        
    }
    for(let k = 0;k<num;k++){
        console.log(result);
        console.log('---------');
    }
}
nxnMatrix(8);