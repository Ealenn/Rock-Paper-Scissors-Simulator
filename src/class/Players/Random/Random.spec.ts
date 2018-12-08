import Random from '../Random';
import { ROCK, PAPER, SCISSORS, GameState } from '../../Game';
import { expect } from 'chai';
import 'mocha';

describe('Random player', () => {

  it('should return ROCK PAPER or SCISSORS', () => {
    const RandomPlayer = new Random();
    let rand = {
      ROCK: 0,
      PAPER: 0,
      SCISSORS: 0
    }

    for (let i = 0; i < 100; i++) {
      const generated: GameState = RandomPlayer.play();
      switch(generated) {
        case ROCK:
          rand.ROCK++; break;
        case PAPER:
          rand.PAPER++; break;
        case SCISSORS:
          rand.SCISSORS++; break;
      }
    }

    expect(rand.ROCK).to.greaterThan(0);
    expect(rand.PAPER).to.greaterThan(0);
    expect(rand.SCISSORS).to.greaterThan(0);
  });

});