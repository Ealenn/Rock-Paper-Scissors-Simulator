import GameResult, { PlayerResult } from './GameResult';
import { output as prettyColumns } from 'pretty-columns';

export default class Display {
    private Results: Array<GameResult> = [];

    public addGameResult(result: GameResult) {
        this.Results.push(result);
    }

    public show() {
        const showableArray: Array<Array<string>> = [];
        const headers = [
            "Player",
            "Opponent",
            "% Win",
            "% Loose",
            "% Egality",
            "Win",
            "Loose",
            "Egality"
        ];

        // Add result
        this.Results.forEach(({results}) => {
            const P1 = results[0];
            const P2 = results[1];

            showableArray.push([
                P1.Player.name,
                P2.Player.name,
                String(this.roundPcr(P1.Winner,P1.Round)),
                String(this.roundPcr(P1.Looser,P1.Round)),
                String(this.roundPcr(P1.Egality,P1.Round)),
                String(P1.Winner),
                String(P1.Looser),
                String(P1.Egality)
            ]);
        });

        // Sort Array
        showableArray.sort((a: string[], b: string[]): number => {
            if (Number(a[2]) > Number(b[2])) {
                return -1;
            }
            return 1;
        });
        showableArray.unshift(headers);

        // Show result
        prettyColumns(showableArray, {
            align: 'cr',
            columnSeparation: ' | ',
            rowSeparation: " |\n| ",
            prefix: '| ',
            suffix: ' |',
            placeholder: ' '
        })
    }

    private roundPcr(value: number, of: number) {
        return Math.round(((value/of)*100) * 100) / 100
    }
}