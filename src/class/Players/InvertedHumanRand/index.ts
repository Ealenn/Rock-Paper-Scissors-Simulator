import { GameState } from "../../Game";
import IPlayer from "../../Players/Player.interface";
import PlayerBot from "../PlayerBot";

export default class InvertedHumanRand extends PlayerBot implements IPlayer {
    private opponentLastGame: GameState;

    get name() : string {
        return "Inverted Human Random";
    }

    play() : GameState {
        let game: GameState;
        do {
            game = this.getRandomState();
        } while (game == this.opponentLastGame);

        return game;
    }

    addToOpponentHistory (state: GameState): void {
        this.opponentLastGame = state;
    }
}