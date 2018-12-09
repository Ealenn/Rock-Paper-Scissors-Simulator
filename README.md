# Simulator of Rock Paper Scissors

## Build and Launch

```sh
# Install dependencies
yarn install
# Build source
yarn build
# Start simulation
yarn start
```

## Players

- **Random** He plays randomly rock paper or scissors

- **Human Random** He plays randomly rock paper or scissors, but never plays the shot just played

- **Inverted Human Random** He plays randomly rock paper or scissors, but never plays the opponent's shot

- **Copycat** He randomly plays the first shot, then replay the opponent's shot

- **Inverted Copycat** Plays the shot he should have played just before for win

## Results

### Leaderboard

|        Player         | % Win/Game | % Loose/Game | % Egality/Game | Win | Loose | Egality |
| --- | --- | --- | --- | --- | --- | --- |
|     Human Random      |         60 | 20           | 20             | 6   | 2     | 2       |
|   Inverted Copycate   |         50 | 30           | 20             | 5   | 3     | 2       |
| Inverted Human Random |         30 | 50           | 20             | 3   | 5     | 2       |
|        Random         |         30 | 50           | 20             | 3   | 5     | 2       |
|       Copycate        |         30 | 50           | 20             | 3   | 5     | 2       |

### Resume

|        Player         |              Opponent | % Win | % Loose | % Egality | Win       | Loose    | Egality   |
| --- | --- | --- | --- | --- | --- | --- | --- |
|     Human Random      |          Human Random | 100   | 0       | 0         | 100000000 | 0        | 0         |
|        Random         |                Random | 66.67 | 0       | 33.33     | 66667669  | 0        | 33332331  |
|   Inverted Copycate   |              Copycate | 50    | 0       | 50        | 50000000  | 0        | 50000000  |
|     Human Random      |              Copycate | 50    | 50      | 0         | 49995590  | 50004409 | 1         |
|     Human Random      |     Inverted Copycate | 50    | 0       | 50        | 50004769  | 0        | 49995231  |
| Inverted Human Random | Inverted Human Random | 49.99 | 0       | 50.01     | 49994037  | 0        | 50005963  |
|       Copycate        |          Human Random | 49.99 | 50.01   | 0         | 49990309  | 50009690 | 1         |
|   Inverted Copycate   |                Random | 33.34 | 33.33   | 33.33     | 33339395  | 33326968 | 33333637  |
|        Random         |              Copycate | 33.34 | 33.33   | 33.33     | 33336421  | 33333991 | 33329588  |
|     Human Random      |                Random | 33.34 | 33.33   | 33.33     | 33336225  | 33333974 | 33329801  |
|       Copycate        | Inverted Human Random | 33.34 | 33.33   | 33.34     | 33336584  | 33327335 | 33336081  |
| Inverted Human Random |     Inverted Copycate | 33.33 | 33.34   | 33.32     | 33333996  | 33342383 | 33323621  |
| Inverted Human Random |              Copycate | 33.33 | 33.34   | 33.33     | 33325922  | 33339811 | 33334267  |
|   Inverted Copycate   | Inverted Human Random | 33.33 | 33.33   | 33.33     | 33333318  | 33334278 | 33332404  |
|        Random         |     Inverted Copycate | 33.33 | 33.34   | 33.33     | 33333121  | 33335463 | 33331416  |
| Inverted Human Random |                Random | 33.33 | 33.34   | 33.33     | 33330727  | 33338471 | 33330802  |
|        Random         |          Human Random | 33.33 | 33.33   | 33.33     | 33331867  | 33334456 | 33333677  |
|        Random         | Inverted Human Random | 33.32 | 33.35   | 33.33     | 33324150  | 33345259 | 33330591  |
|       Copycate        |                Random | 33.32 | 33.34   | 33.34     | 33322916  | 33337545 | 33339539  |
| Inverted Human Random |          Human Random | 25    | 25      | 50        | 24998223  | 25000128 | 50001649  |
|     Human Random      | Inverted Human Random | 24.99 | 25      | 50.01     | 24993757  | 24999385 | 50006858  |
|       Copycate        |              Copycate | 0     | 0       | 100       | 1         | 0        | 99999999  |
|   Inverted Copycate   |     Inverted Copycate | 0     | 0       | 100       | 0         | 0        | 100000000 |
|   Inverted Copycate   |          Human Random | 0     | 50      | 50        | 0         | 49997858 | 50002142  |
|       Copycate        |     Inverted Copycate | 0     | 50      | 50        | 0         | 50000000 | 50000000  |
