function inventory(input){
    
    let newArr = [];
    let arrLength = input.length;

  for(let i = 0; i < arrLength;i++){
     let line = input.shift().split(' / ');
     let name = line[0];
     let level = Number(line[1]);
     let items = line[2];
     let obj = {};
     obj.name = name;
     obj.level = level;
     obj.items = items;
    newArr.push(obj);

  }
  newArr.sort((a,b) => a.level-b.level);
  newArr.forEach(element => {
    console.log(`Hero: ${element.name}`);
    console.log(`level => ${element.level}`);
    console.log(`items => ${element.items}`);
  });
}
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    
    );