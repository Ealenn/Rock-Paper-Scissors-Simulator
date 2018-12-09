import Copycat from '../InvertedCopycat';
import { ROCK, PAPER, SCISSORS } from '../../Game';
import { expect } from 'chai';
import 'mocha';

describe('InvertedCopycat player', () => {

  it('should return opponent win history', () => {
    const copycat = new Copycat();

    copycat.addToOpponentHistory(PAPER);
    expect(copycat.play()).to.equal(SCISSORS);

    copycat.addToOpponentHistory(ROCK);
    expect(copycat.play()).to.equal(PAPER);

    copycat.addToOpponentHistory(SCISSORS);
    expect(copycat.play()).to.equal(ROCK);
  });

});