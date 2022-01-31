import { fibfib } from '../fibfib';
import { performance } from 'perf_hooks';

describe('fibfib', () => {
  it('should return the proper numbers', () => {
    expect(fibfib()).toEqual([
      1, 1, 1, 2, 5, 21, 233, 10946, 5702887, 139583862445, 1779979416004714000,
      5.5556540422429276e29, 2.2112364063039142e48, 2.7469792069499394e78,
      1.358236979127825e127,
    ]);
  });

  it('should not take too long', () => {
    const startTime = performance.now();
    fibfib();
    const endTime = performance.now();

    expect(endTime - startTime).toBeLessThan(0.05);
  });
});
