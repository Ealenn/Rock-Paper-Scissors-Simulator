import { GameState } from "../../Game";
import IPlayer from "../../Players/Player.interface";
import PlayerTools from "../../Players/PlayerTools";

export default class HumanRand extends PlayerTools implements IPlayer {
    private history: Array<GameState> = [];

    get name() : string {
        return "HumanRand";
    }

    play() : GameState {
        const lastGame = this.history[this.history.length - 1];
        let game = lastGame;
        do {
            game = this.getRandomState();
        } while (game == lastGame);

        this.history.push(game);
        return game;
    }
}