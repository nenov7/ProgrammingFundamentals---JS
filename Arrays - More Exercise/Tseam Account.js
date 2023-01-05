function tseamAcc(gameArray) {

    let petersGames = gameArray.shift().split(' ');

    for (let i = 0; i < gameArray.length; i++) {
        let com = gameArray[i].split(' ');
        let command = com[0];
        let game = com[1];

        if (command === 'Play!') {
            break;
        }

        let gameIndex = petersGames.indexOf(game);

        if (command === 'Install') {
            if (!petersGames.includes(game)) {
                petersGames.push(game);
            }
        } else if (command === 'Uninstall') {
            if (petersGames.includes(game)) {
                petersGames.splice(gameIndex, 1);
            }
        } else if (command === 'Update') {
            if (petersGames.includes(game)) {
                petersGames.splice(gameIndex, 1);
                petersGames.push(game);
            }
        } else {
            
                game = game.split('-')
                let spiel = game[0]
                let exp = game[1]
                if (petersGames.includes(spiel)) {
                    let index = petersGames.indexOf(spiel)
                    petersGames.splice(index + 1, 0, `${spiel}:${exp}`)
                
            }


        }


    }

    console.log(petersGames.join(' '));

}
tseamAcc(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);
