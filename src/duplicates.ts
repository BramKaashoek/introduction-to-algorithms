// return an array with all duplicate values. Include every duplicate value only once.

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
