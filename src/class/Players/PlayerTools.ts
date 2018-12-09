import { GameState, ROCK, PAPER, SCISSORS } from "../Game";
import PlayerStats from './PlayerStats';
import MersenneTwister from 'mersenne-twister';

export default class PlayerTools {
    public Stats: PlayerStats = new PlayerStats();
    private RandomEngine: any = new MersenneTwister();

    protected getRandomState() : GameState {
        const rand = Math.floor(this.RandomEngine.random() * Math.floor(3)) + 1
        switch(rand) {
            case 1:
                return ROCK;
            case 2:
                return PAPER;
            case 3:
                return SCISSORS;
        }
    }
}