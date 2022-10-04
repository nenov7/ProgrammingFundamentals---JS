function main (input){

    let figureType = input[0];
    let side = Number(input[1]);
    let height = Number(input[2])

    let face;

    if(figureType === 'square'){
    face = side * side;
    console.log(face.toFixed(3));

    }else if(figureType === 'rectangle'){
    face = side * height
    console.log(face.toFixed(3));

    // S = pr^2
    }else if(figureType === 'circle'){
        face =Math.PI* side * side
        console.log(face.toFixed(3));
    }else if(figureType === 'triangle')  {
        face = side * height / 2;
        console.log(face.toFixed(3));
    }   
}
main(["triangle","4.5","20"])

