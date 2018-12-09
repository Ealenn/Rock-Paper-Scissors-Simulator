import { GameState } from "../../Game";
import IPlayer from "../Player.interface";
import PlayerBot from "../PlayerBot";

export default class Random extends PlayerBot implements IPlayer {
    public get name() : string {
        return "Random";
    }

    public play() : GameState {
        return this.getRandomState();
    }
}