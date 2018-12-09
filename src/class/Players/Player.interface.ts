import { GameState } from "../Game";
import PlayerStats from "./PlayerStats";

export default interface IPlayer extends PlayerStats {
    name: string;
    play(): GameState;
    addToOpponentHistory?(state: GameState): void;
}
