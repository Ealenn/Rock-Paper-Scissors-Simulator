import HumanRand from '../HumanRand';
import { expect } from 'chai';
import 'mocha';

describe('Human rand', () => {

  it('should return != second main', () => {
    const humanRand = new HumanRand();
    let last = humanRand.play();
    let now = humanRand.play();

    for(let i = 0; i < 100; i++) {
      expect(last).to.not.equal(now);
      last = now;
      now = humanRand.play();
    }
  });

});