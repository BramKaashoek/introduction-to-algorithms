import { duplicateElements } from '../duplicates';
import { performance } from 'perf_hooks';

describe('duplicates', () => {
  it('should return the proper numbers', () => {
    expect(duplicateElements([1, 2, 3])).toEqual([]);
    expect(duplicateElements([1, 2, 3, 1, 2])).toEqual([1, 2]);
    expect(duplicateElements([1, 2, 3, 1, 2, 2])).toEqual([1, 2]);
    expect(
      duplicateElements([...Array(10000).keys(), ...Array(10000).keys()])
    ).toEqual([...Array(10000).keys()]);
  });

  it('should not take too long', () => {
    const startTime = performance.now();
    duplicateElements([...Array(10000).keys()]);
    const endTime = performance.now();

    expect(endTime - startTime).toBeLessThan(10);
  });
});
