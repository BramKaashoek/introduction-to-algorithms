import { performance } from 'perf_hooks';
import { canSum } from '../canSum';

describe('canSum', () => {
  it('should return the correct answers', () => {
    expect(canSum(6, [6])).toEqual(true);
    expect(canSum(6, [3])).toEqual(true);
    expect(canSum(9, [3, 4, 5])).toEqual(true);
    expect(canSum(7777, [3, 14])).toEqual(true);
    expect(canSum(7777, [4, 14])).toEqual(false);
    expect(canSum(7777, [13, 14])).toEqual(true);
    expect(canSum(7777, [29, 14])).toEqual(true);
    expect(canSum(7777, [42, 71])).toEqual(true);
    expect(canSum(7777, [256, 175])).toEqual(false);
    expect(canSum(7777, [256, 175, 1119])).toEqual(false);
    expect(canSum(7777, [256, 175, 1119, 2760])).toEqual(false);
    expect(canSum(7777, [256, 175, 1119, 2760, 123])).toEqual(true);
  });

  it('should not take too long', () => {
    const startTime = performance.now();
    expect(canSum(7777, [256, 175, 1119, 2760, 123])).toEqual(true);
    const endTime = performance.now();

    expect(endTime - startTime).toBeLessThan(0.5);
  });
});
