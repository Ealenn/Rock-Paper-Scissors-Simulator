import { Game } from './class/Game';
import IPlayer from './class/Players/Player.interface'
import Display from './class/Display';
import Ora from 'ora';

import Copycat from './class/Players/Copycat';
import Random from './class/Players/Random';
import HumanRand from './class/Players/HumanRand';

const Displayer = new Display();
const Players: Array<IPlayer> = [
    new Copycat(),
    new Random(),
    new HumanRand()
];

for (const FirstPlayer of Players) {
    for (const SecondPlayer of Players) {
        const spinner = Ora(`${FirstPlayer.name} play with ${SecondPlayer.name}`).start();
        Displayer.addGameResult(new Game(
            FirstPlayer,
            SecondPlayer,
            1000000
            ).shifumi());
        spinner.succeed();
    }
}

Displayer.show();