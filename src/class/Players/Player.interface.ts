import { GameState } from "../Game";

export default interface IPlayer {
    name: string;
    play(): GameState;
    addToOpponentHistory?(state: GameState): void;
}
