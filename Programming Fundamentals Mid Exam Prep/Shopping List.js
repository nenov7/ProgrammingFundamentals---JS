function shoppingListExam(arr){

    let shoppingList = arr.shift().split('!');
    
    for(let i = 0; i < arr.length;i++){

        let com = arr[i].split(' ');
        let command = com[0];
        let item = com[1];
        let secondItem = com[2];    //Milk, Onion, Salt, Water, Banana

        if(command === "Go"){
            break;
        }

        if(command === 'Urgent'){
            if(!shoppingList.includes(item)){
                shoppingList.unshift(item);
            }
        } else if(command === 'Unnecessary'){
            if(shoppingList.includes(item)){
                shoppingList.splice(shoppingList.indexOf(item),1)
            }
        } else if(command === 'Correct'){
            if(shoppingList.includes(item)){
                shoppingList.splice(shoppingList.indexOf(item),1,secondItem);
            }
        } else {
            if(shoppingList.includes(item)){
                shoppingList.splice(shoppingList.indexOf(item),1);
                shoppingList.push(item);
            }
        }

    }
    console.log(shoppingList.join(', '));

}
shoppingListExam(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

;