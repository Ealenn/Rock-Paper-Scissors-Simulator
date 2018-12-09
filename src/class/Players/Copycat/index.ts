import { GameState } from "../../Game";
import IPlayer from "../../Players/Player.interface";
import PlayerBot from "../PlayerBot";

export default class Copycat extends PlayerBot implements IPlayer {
    private lastOpponentGame: GameState;

    get name() : string {
        return "Copycate";
    }

    play() : GameState {
        return this.lastOpponentGame ? this.lastOpponentGame : this.getRandomState()
    }

    addToOpponentHistory(state: GameState) {
        this.lastOpponentGame = state;
    }
}