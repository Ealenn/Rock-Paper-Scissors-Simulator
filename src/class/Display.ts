import GameResult, { PlayerResult } from './GameResult';
import IPlayer from './Players/Player.interface';

import { output as prettyColumns } from 'pretty-columns';
import chalk from 'chalk';

export default class Display {
    private Results: Array<GameResult> = [];

    public addGameResult(result: GameResult) {
        this.Results.push(result);
    }

    public showResumeGames() {
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

        this.showArray('Resume', showableArray, headers, (a: string[], b: string[]): number => {
            if (Number(a[3]) > Number(b[3])) {
                return -1;
            }
            return 1;
        });
    }

    public showLeaderboard() {
        const showableArray: Array<Array<string>> = [];
        const headers = [
            "Player",
            "Game Win",
            "Round Win"
        ];

        const Players: Array<IPlayer> = [];
        for (const results of this.Results) {
            for (const result of results.results) {
                if (!(Players.indexOf(result.Player) >= 0)) {
                    Players.push(result.Player);
                }
            }
        }

        for (const player of Players) {
            showableArray.push([
                player.name,
                String(player.Stats.WinGame),
                String(player.Stats.WinRound),
            ]);
        }

        this.showArray('Leaderboard', showableArray, headers, (a: string[], b: string[]): number => {
            if (Number(a[1]) > Number(b[1])) {
                return -1;
            }
            return 1;
        });
    }

    private showArray(title: string, data: Array<Array<string>>, headers: Array<string>, sort: (a: any, b: any)=> number) {
        console.log(`
            ${chalk.bold(title)}
        `);

        data.sort(sort);
        data.unshift(headers);
        prettyColumns(data, {
            align: 'cr',
            columnSeparation: ' | ',
            rowSeparation: " |\n| ",
            prefix: '| ',
            suffix: ' |',
            placeholder: ' '
        });
    }

    private roundPcr(value: number, of: number) {
        return Math.round(((value/of)*100) * 100) / 100
    }
}