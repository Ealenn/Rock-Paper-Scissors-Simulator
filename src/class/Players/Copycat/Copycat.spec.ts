import Copycat from '../Copycat';
import { ROCK, PAPER } from '../../Game';
import { expect } from 'chai';
import 'mocha';

describe('Copycat player', () => {

  it('should return opponent history', () => {
    const copycat = new Copycat();
    copycat.addToOpponentHistory(PAPER);
    expect(copycat.play()).to.equal(PAPER);

    copycat.addToOpponentHistory(ROCK);
    expect(copycat.play()).to.equal(ROCK);
  });

});