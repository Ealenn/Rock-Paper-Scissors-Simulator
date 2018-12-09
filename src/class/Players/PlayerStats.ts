export default class PlayerStats {
    private GameWin: number = 0;
    private RoundWin: number = 0;

    private GameLoose: number = 0;
    private RoundLoose: number = 0;

    private GameEgality: number = 0;
    private RoundEgality: number = 0;

    public addWinGame(game: number = 1) {
        this.GameWin += game;
    }
    public addLooseGame(game: number = 1) {
        this.GameLoose += game;
    }
    public addEgalityGame(game: number = 1) {
        this.GameEgality += game;
    }
    get WinGame() {
        return this.GameWin;
    }
    get LooseGame() {
        return this.GameLoose;
    }
    get EgalityGame() {
        return this.GameEgality;
    }
    get TotalGame() {
        return this.GameWin + this.GameLoose + this.GameEgality;
    }

    public addWinRound(round: number = 1) {
        this.RoundWin += round;
    }
    public addLooseRound(round: number = 1) {
        this.RoundLoose += round;
    }
    public addEgalityRound(round: number = 1) {
        this.RoundEgality += round;
    }
    get WinRound() {
        return this.RoundWin;
    }
    get LooseRound() {
        return this.RoundLoose;
    }
    get EgalityRound() {
        return this.RoundEgality;
    }
    get TotalRound() {
        return this.RoundWin + this.RoundLoose + this.RoundEgality;
    }
}