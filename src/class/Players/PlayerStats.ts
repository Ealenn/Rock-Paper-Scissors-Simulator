export default class PlayerStats {
    private GameWin: number = 0;
    private RoundWin: number = 0;

    public addWinGame(game: number = 1) {
        this.GameWin += game;
    }

    public addWinRound(round: number = 1) {
        this.RoundWin += round;
    }

    get WinGame() {
        return this.GameWin;
    }

    get WinRound() {
        return this.RoundWin;
    }
}