import InvertedHumanRand from '../InvertedHumanRand';
import { ROCK } from '../../Game';
import { expect } from 'chai';
import 'mocha';

describe('Inverted Human Random', () => {

  it('should return != opponent main', () => {
    const invertedHumanRand = new InvertedHumanRand();
    invertedHumanRand.addToOpponentHistory(ROCK);

    for(let i = 0; i < 100; i++) {
      expect(invertedHumanRand.play()).to.not.equal(ROCK);
    }
  });

});