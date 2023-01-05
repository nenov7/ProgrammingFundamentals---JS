function solve(arr){

    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let arrayLength = arr.length;
    for(let i = 0; i < arrayLength;i++){
        let command = arr.shift().split(' ');
        let catName = command[0]
        let catAge = command[1]
        
        let cat = new Cat(catName,catAge)
        cat.meow();

    }

    
}
solve(['Mellow 2', 'Tom 5']);