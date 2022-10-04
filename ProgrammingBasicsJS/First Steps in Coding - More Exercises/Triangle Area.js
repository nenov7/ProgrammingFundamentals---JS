function triangle(input){

    let side = Number(input[0]);
    let h = Number(input[1]);

    let face = side * h / 2;
    console.log(face.toFixed(2));

}
triangle(["20",
"30"]);