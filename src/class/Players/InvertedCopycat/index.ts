import { GameState, ROCK, PAPER, SCISSORS } from "../../Game";
import IPlayer from "../../Players/Player.interface";
import PlayerBot from "../PlayerBot";

export default class InvertedCopycat extends PlayerBot implements IPlayer {
    private lastOpponentGame: GameState;

    get name() : string {
        return "Inverted Copycate";
    }

    play() : GameState {
        switch (this.lastOpponentGame) {
            case ROCK:
                return PAPER;
            case PAPER:
                return SCISSORS;
                break;
            case SCISSORS:
                return ROCK;
                break;
            default:
                return this.getRandomState();
        }
    }

    addToOpponentHistory(state: GameState) {
        this.lastOpponentGame = state;
    }
}