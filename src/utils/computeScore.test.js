const fetch = require("node-fetch");
import { computeScore } from './computeScore';


  test('returns 6', () => {

    const cat = { breeds: [{
      "energy_level": 2,
      "affection_level": 2,
      "stranger_friendly": 2
    }]};

    let result = computeScore(cat);
    expect(result).toEqual(6);
  });
