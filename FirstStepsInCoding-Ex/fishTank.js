function fishTank (input){
let length = Number(input[0])
let witdh = Number(input[1])
let heigth = Number(input[2])
let percentTakenPlace = Number(input[3])

let vAquariumInLiters = (length * witdh *heigth) / 1000
let takenPlace = percentTakenPlace / 100
let litersNeeded = vAquariumInLiters * (1 - takenPlace);

console.log(litersNeeded)


}
fishTank(["105 ","77 ","89 ","18.5 "]);