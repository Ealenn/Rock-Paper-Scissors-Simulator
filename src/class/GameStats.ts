import IPlayer from "./Players/Player.interface";

export default class GameResult {
    private results: Array<PlayerResult> = [];

    constructor(playerOne: IPlayer, playerTwo: IPlayer) {
        this.results.push(
            new PlayerResult(playerOne),
            new PlayerResult(playerTwo)
        );
    }

    public addWinner(player: IPlayer): void {
        this.results.forEach((result: PlayerResult) => {
            if (result.Player == player) {
                result.Win++;
            } else {
                result.Loose++;
            }
        });
    }

    public addEgality(): void {
        this.results.forEach((result: PlayerResult) => {
            result.Egality++;
        });
    }

    get Results(): Array<PlayerResult> {
        return this.results;
    }
}

export class PlayerResult {
    private _Player: IPlayer;
    private _Win: number;
    private _Loose: number;
    private _Egality: number;

    constructor(player: IPlayer) {
        this._Player = player;
        this._Win = 0;
        this._Loose = 0;
        this._Egality = 0;
    }

    get Player() {
        return this._Player;
    }

    get Win() {
        return this._Win;
    }

    get Loose() {
        return this._Loose;
    }

    get Egality() {
        return this._Egality;
    }

    set Win(value: number) {
        this._Win = value;
        this._Player.addWinRound();
    }

    set Loose(value: number) {
        this._Loose = value;
        this._Player.addLooseRound();
    }

    set Egality(value: number) {
        this._Egality = value;
        this._Player.addEgalityRound();
    }

    get Round() {
        return this._Win + this._Loose + this._Egality;
    }
}