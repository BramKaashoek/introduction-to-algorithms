// the function takes a target number and an array of numbers it can use.
// the goal is to see if you can get the target number by summing the option numbers
// each option can be used more than once
// expect(canSum(9, [3, 4, 5])).toEqual(true);
// expect(canSum(9, [3, 5, 7])).toEqual(false);

export const canSum = (
  target: number,
  options: number[],
  memo: { [key: number]: boolean } = {}
) => {
  if (target === 0) return true;
  if (target < 0) return false;
  if (target in memo) return memo[target];

  for (let option of options) {
    const remainder = target - option;
    if (canSum(remainder, options, memo) === true) {
      memo[target] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
};
