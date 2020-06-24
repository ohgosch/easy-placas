import { pxToRem } from "./pxToRem";

describe('[Logic] pxToRem', () => {
  it('Should returns 0.625rem', () => {
    const rem = pxToRem(10);
    expect(rem).toEqual('0.625rem');
  });

  it('Should returns 1rem', () => {
    const rem = pxToRem(16);
    expect(rem).toEqual('1rem');
  });

  it('Should returns 1.25rem', () => {
    const rem = pxToRem(20);
    expect(rem).toEqual('1.25rem');
  });

  it('Should returns 2rem', () => {
    const rem = pxToRem(32);
    expect(rem).toEqual('2rem');
  });
});
