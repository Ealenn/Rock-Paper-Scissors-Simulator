import IPlayer from "./Players/Player.interface";

export default class GameResult {
    public results: Array<PlayerResult> = [];

    constructor(playerOne: IPlayer, playerTwo: IPlayer) {
        this.results.push(
            new PlayerResult(playerOne),
            new PlayerResult(playerTwo)
        );
    }

    public addWinner(player: IPlayer) {
        this.results.forEach((result: PlayerResult) => {
            result.Round++;
            if (result.Player == player) {
                result.Winner++;
            } else {
                result.Looser++;
            }
        });
    }

    public addEgality() {
        this.results.forEach((result: PlayerResult) => {
            result.Round++;
            result.Egality++;
        });
    }

    public show () {
        this.results.forEach((result: PlayerResult) => {
            result.show();
        });
    }
}

export class PlayerResult {
    public Player: IPlayer;
    public Winner: number;
    public Looser: number;
    public Egality: number;
    public Round: number;

    constructor(player: IPlayer) {
        this.Player = player;
        this.Winner = 0;
        this.Looser = 0;
        this.Egality = 0;
        this.Round = 0;
    }

    public show() {
        console.log(`
            ${this.Player.name} :
            Win : ${this.Winner}
            Loose : ${this.Looser}
            Egality : ${this.Egality}
        `);
    }
}