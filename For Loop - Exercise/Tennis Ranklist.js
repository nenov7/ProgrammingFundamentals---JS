function tennis(input) {

    let index = 0;
    let tournamentCount = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let win = 0;
    let pointsWon = 0;
    for (i = 0; i < tournamentCount; i++) {
        let tournamentState = input[index];
        index++;

        if (tournamentState === "W") {
            pointsWon += 2000;
            win++;
        } else if (tournamentState === "F") {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }

    }

    let totalPoints = startingPoints + pointsWon;
    let averagePoints = pointsWon / tournamentCount;
    let winPercent = win / tournamentCount * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winPercent.toFixed(2)}%`);

}
tennis(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])

    ;