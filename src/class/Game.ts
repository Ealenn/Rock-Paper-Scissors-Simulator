import GameResult from "./GameResult";
import IPlayer from "./Players/Player.interface";

export type GameState = "ROCK" | "PAPER" | "SCISSORS";
export const ROCK: GameState = "ROCK";
export const PAPER: GameState = "PAPER";
export const SCISSORS: GameState = "SCISSORS";

export class Game {

    private playerOne: IPlayer;
    private playerTwo: IPlayer;
    private round: number;
    private result: GameResult;

    constructor(playerOne: IPlayer, playerTwo: IPlayer, round: number = 1) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.round = round;
        this.result = new GameResult(this.playerOne, this.playerTwo);
    }

    public shifumi(): GameResult {
        for (let actualRound = 0; actualRound < this.round; actualRound++) {
            const winner = this.play();
            if (winner) {
                this.result.addWinner(winner);
            } else {
                this.result.addEgality();
            }
        }
        return this.result;
    }

    private play(): IPlayer | null {
        const playerOneState = this.playerOne.play();
        const playerTwoState = this.playerTwo.play();

        if(this.playerOne.addToOpponentHistory)
            this.playerOne.addToOpponentHistory(playerTwoState);
        if(this.playerTwo.addToOpponentHistory)
            this.playerTwo.addToOpponentHistory(playerOneState);

        switch (playerOneState) {
            case ROCK:
                if (playerTwoState === ROCK) return null;
                return playerTwoState !== PAPER ? this.playerOne : this.playerTwo;
            case PAPER:
                if (playerTwoState === PAPER) return null;
                return playerTwoState !== SCISSORS ? this.playerOne : this.playerTwo;
            case SCISSORS:
                if (playerTwoState === SCISSORS) return null;
                return playerTwoState !== ROCK ? this.playerOne : this.playerTwo;
            default:
                return null;
        }
    }

}
