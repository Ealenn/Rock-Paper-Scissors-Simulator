import GameResult, { PlayerResult } from './GameStats';
import IPlayer from './Players/Player.interface';

import { output as prettyColumns } from 'pretty-columns';
import chalk from 'chalk';

export default class Display {
    private GamesResults: Array<GameResult> = [];

    public addGameResult(result: GameResult) {
        this.GamesResults.push(result);
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
        for(const OneGameResult of this.GamesResults) {
            const P1 = OneGameResult.Results[0];
            const P2 = OneGameResult.Results[1];

            showableArray.push([
                P1.Player.name,
                P2.Player.name,
                String(this.roundPcr(P1.Win,P1.Round)),
                String(this.roundPcr(P1.Loose,P1.Round)),
                String(this.roundPcr(P1.Egality,P1.Round)),
                String(P1.Win),
                String(P1.Loose),
                String(P1.Egality)
            ]);
        }

        this.showArray('Resume', showableArray, headers, (a: string[], b: string[]): number => {
            if (Number(a[2]) > Number(b[2])) {
                return -1;
            }
            return 1;
        });
    }

    public showLeaderboard() {
        const showableArray: Array<Array<string>> = [];
        const headers = [
            "Player",
            "% Win/Game",
            "% Loose/Game",
            "% Egality/Game",
            "Win",
            "Loose",
            "Egality"
        ];

        const Players: Array<IPlayer> = [];
        for (const OneGameResult of this.GamesResults) {
            for (const OnePlayerResult of OneGameResult.Results) {
                if (!(Players.indexOf(OnePlayerResult.Player) >= 0)) {
                    Players.push(OnePlayerResult.Player);
                }
            }
        }

        for (const player of Players) {
            showableArray.push([
                player.name,
                String(this.roundPcr(player.WinGame, player.TotalGame)),
                String(this.roundPcr(player.LooseGame, player.TotalGame)),
                String(this.roundPcr(player.EgalityGame, player.TotalGame)),
                String(player.WinGame),
                String(player.LooseGame),
                String(player.EgalityGame),
            ]);
        }

        this.showArray('Leaderboard', showableArray, headers, (a: string[], b: string[]): number => {
            if (Number(a[4]) > Number(b[4])) {
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