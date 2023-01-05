function city(input) {

    let obj = {
        name: input[0],
        area: input[1],
        population:input[2],
        country:input[3],
        postCode:input[4],
    }

    for (let key in obj){
        console.log(`${key} -> ${obj[key]}`);
    }

}
city([{
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}]
);