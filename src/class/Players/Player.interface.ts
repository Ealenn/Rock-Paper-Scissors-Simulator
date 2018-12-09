import { GameState } from "../Game";
import PlayerStats from "./PlayerStats";

export default interface IPlayer {
    name: string;
    Stats: PlayerStats;
    play(): GameState;
    addToOpponentHistory?(state: GameState): void;
}
