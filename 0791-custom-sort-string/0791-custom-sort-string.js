/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let sMap = {};
  let d = ``;
  let e = ``;

  for (let i of s) {
    sMap[i] ? (sMap[i] += 1) : (sMap[i] = 1);
  }

  for (let i of order) {
    if (Object.keys(sMap).includes(i)) {
      d += i.repeat(sMap[i]);
      delete sMap[i];
    }
  }

  sMap = Object.entries(sMap).sort((a, b) => a[0] - b[0]);

  for (let i of sMap) {
    d += i[0].repeat(i[1]);
  }

  return d;
};