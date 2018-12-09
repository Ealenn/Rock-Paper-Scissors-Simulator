import { GameState } from "../../Game";
import IPlayer from "../../Players/Player.interface";
import PlayerTools from "../PlayerTools";

export default class HumanRand extends PlayerTools implements IPlayer {
    private lastGame: GameState;

    get name() : string {
        return "Human Random";
    }

    play() : GameState {
        let game: GameState;
        do {
            game = this.getRandomState();
        } while (game == this.lastGame);

        this.lastGame = game;
        return game;
    }
}