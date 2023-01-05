function wildZoo(input){
    let allAnimals={};
    let areas={};
    let currentLine=input.shift();
    while(currentLine !== 'EndDay'){
        let action=currentLine.split(': ').shift()
        let animalInfo=currentLine.split(': ');
        let [name,foodLimit,area]=animalInfo[1].split('-');
        switch(action){
            case "Add":
            if(allAnimals[name]){
                allAnimals[name].food+=Number(foodLimit);
            }else{
                allAnimals[name]={
                    food: Number(foodLimit),
                    area: area,
                };
            }
                break;
            case "Feed":
                if(allAnimals[name]){
                    allAnimals[name].food-=foodLimit;
                    if(allAnimals[name].food<=0){
                        delete allAnimals[name];
                        console.log(`${name} was successfully fed`);
                    }
                }
                break;
        }
        currentLine=input.shift();
    }
    let animalsLeft=Object.keys(allAnimals);
    console.log("Animals:");
    for(let animal of animalsLeft){
        console.log(`${animal} -> ${allAnimals[animal].food}g`);
        let currentArea=allAnimals[animal].area;
        if (areas[currentArea]){
            areas[currentArea]++;
        }else{
            areas[currentArea]=1;
        }
    }
    console.log("Areas with hungry animals:");
    for (let area in areas){
        console.log(`${area}: ${areas[area]}`);
    }
    }

wildZoo(["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])
