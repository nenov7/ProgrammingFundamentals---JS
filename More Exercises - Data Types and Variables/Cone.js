function cone(radius, height){

    //V=1/3hπr²
    //surface = πrl
    //πrs + πr2
    //s = √(r2 + h2)

    let v = 1/3 * Math.PI * radius * radius * height;
    let s = Math.sqrt(radius * radius + height * height)
    let surface = Math.PI * radius * s + Math.PI * radius * radius;
    console.log(`volume = ${v.toFixed(4)}`);
    console.log(`area = ${surface.toFixed(4)}`);

}
cone(3.3,
    7.8
    );