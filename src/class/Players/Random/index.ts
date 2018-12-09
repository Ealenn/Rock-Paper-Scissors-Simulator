import { GameState } from "../../Game";
import IPlayer from "../Player.interface";
import PlayerTool from "../PlayerTools";

export default class Random extends PlayerTool implements IPlayer {
    public get name() : string {
        return "Random";
    }

    public play() : GameState {
        return this.getRandomState();
    }
}