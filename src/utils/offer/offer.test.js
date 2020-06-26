import {calculateRatingPercentage} from './offer.js';

it(`Rating 4 converted to 80 percent`, () => expect(calculateRatingPercentage(4)).toBe(80));
it(`Rating 3.5 converted to 70 percent`, () => expect(calculateRatingPercentage(3.5)).toBe(70));
