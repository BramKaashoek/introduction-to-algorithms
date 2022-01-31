// return an array with all duplicate values. Include every duplicate value only once.

// export const duplicateElements = (array: number[]) => {
//   const duplicates: number[] = [];

//   array.forEach((elem, i) => {
//     array.forEach((val, j) => {
//       if (j !== i) {
//         if (val === elem && !duplicates.includes(elem)) {
//           duplicates.push(elem);
//         }
//       }
//     });
//   });
//   return duplicates;
// };

export const duplicateElements = (arr: number[]) => {
  let arrMap: { [key: number]: number } = {};
  let duplicatesMap: { [key: number]: number } = {};
  let finalArr: number[] = [];

  arr.forEach((elem) => {
    if (!(elem in arrMap)) {
      arrMap[elem] = elem;
    } else {
      if (elem in arrMap && !(elem in duplicatesMap)) {
        duplicatesMap[elem] = elem;
        finalArr.push(elem);
      }
    }
  });

  return finalArr;
};
