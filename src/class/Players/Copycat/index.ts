import { GameState, ROCK, PAPER, SCISSORS } from "../../Game";
import IPlayer from "../../Players/Player.interface";
import PlayerTools from "../../Players/PlayerTools";

export default class Copycat extends PlayerTools implements IPlayer {
    _opponentHistory: Array<GameState> = [];

    get name() : string {
        return "CopyCatePlayer";
    }

    play() : GameState {
        const opponentHistoryLength = this._opponentHistory.length;
        return opponentHistoryLength > 0 ? this._opponentHistory[opponentHistoryLength - 1] : this.getRandomState()
    }

    addToOpponentHistory(state: GameState) {
        this._opponentHistory.push(state);
    }
}