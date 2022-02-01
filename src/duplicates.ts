// return an array with all duplicate values. Include every duplicate value only once.
// expect(duplicateElements([1, 2, 3, 1, 2, 2])).toEqual([1, 2]);

export const duplicateElements = (array: number[]) => {
  const duplicates: number[] = [];

  array.forEach((elem, i) => {
    array.forEach((val, j) => {
      if (j !== i) {
        if (val === elem && !duplicates.includes(elem)) {
          duplicates.push(elem);
        }
      }
    });
  });
  return duplicates;
};
