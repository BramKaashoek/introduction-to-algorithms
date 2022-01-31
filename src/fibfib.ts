// calculate the first 15 fibonacci numbers
// and then return the 15 corresponding fibonacci numbers
// example:
// first 8 fibonacci numbers:  [1, 1, 2, 3, 5, 8, 13, 21]
// so the correct response would be [1, 1, 1, 2, 5, 21, 233, 10946]

export const fibfib = () => {
  return [...Array(15).keys()]
    .map((e) => getNFiboncacci(e + 1))
    .map((n) => getNFiboncacci(n));
};

const fibMap: { [key: number]: number } = { 1: 1, 2: 1 };

const getNFiboncacci = (n: number): number => {
  if (n in fibMap) return fibMap[n];

  const nFib = getNFiboncacci(n - 1) + getNFiboncacci(n - 2);
  fibMap[n] = nFib;
  return nFib;
};
