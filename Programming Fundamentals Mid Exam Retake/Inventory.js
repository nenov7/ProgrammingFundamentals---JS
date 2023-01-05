function inventoryy(input){
    let inventory = input.shift().split(', ');
    
    let line = input.shift().split(' - ');
    
    while(line[0] !== 'Craft!'){
        let command = line[0];

        if(command === 'Collect'){
            let item = line[1];
            if(!inventory.includes(item)){
                inventory.push(item);
            }
        } else if(command === 'Drop'){
            let item = line[1];
            if(inventory.includes(item)){
                inventory.splice(inventory.indexOf(item), 1)
            }
        } else if(command === 'Combine Items'){
            let [oldItem,newItem] = line[1].split(':');
            if(inventory.includes(oldItem)){
                inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem);
            }
        } else {
            let item = line[1];
            if(inventory.includes(item)){
                inventory.splice(inventory.indexOf(item), 1);
                inventory.push(item);
            }
        }


        line = input.shift().split(' - ');
    }

    console.log(inventory.join(', '));
    
}
inventoryy([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  
  
  );