function movingTarget(inputArr){

    let targets = inputArr.shift().split(' ').map(Number);
    
    for(let i = 0; i < inputArr.length;i++){
        let com = inputArr[i].split(' ');
        let command = com[0];
        let index = Number(com[1]);
        let powerValueRadius = Number(com[2]);

        if(command === 'End'){
            break;
        }

        if(command === 'Shoot'){
            if(targets[index] !== undefined){ // index exists
                targets[index] -= powerValueRadius;
                 if(targets[index] <=0){
                targets.splice(index,1);
            }
            }
            
        } else if(command === 'Add'){
            if(targets[index] !== undefined){ //index exists
                targets.splice(index,0,powerValueRadius)
            } else {
                console.log("Invalid placement!");
            }
        } else {
            let elementsToRemove = powerValueRadius * 2 + 1;
            let currIndex = targets.indexOf(targets[index]);
            let startIndex = currIndex - powerValueRadius;

            if(startIndex < 0){
                console.log('Strike missed!');
            } else{
                targets.splice(startIndex, elementsToRemove);
            }

            

        }
    }

    console.log(targets.join('|'));

}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"]

);