import { validatePlate } from './validation';

describe('[Logic] validatePlate', () => {
  it('Should returns false', () => {
    expect(validatePlate('abc1234')).toEqual(false);
  });

  it('Should returns false', () => {
    expect(validatePlate('abc1A34')).toEqual(false);
  });

  it('Should returns true', () => {
    expect(validatePlate('abc1AA4')).toEqual(true);
  });

  it('Should returns true', () => {
    expect(validatePlate('a1c1234')).toEqual(true);
  });

  it('Should returns true', () => {
    expect(validatePlate('abceA4')).toEqual(true);
  });
});
