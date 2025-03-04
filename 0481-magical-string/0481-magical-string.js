/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  if (n <= 0) return 0;
  if (n <= 3) return 1;
  
  const s = [1, 2, 2];
  let head = 2;
  let num = 1;
  let countOne = 1;

  while (s.length < n) {
    const times = s[head]; 
    for (let i = 0; i < times; i++) {
      s.push(num);
      if (num === 1 && s.length <= n) {
        countOne++;
      }
    }
    num = num === 1 ? 2 : 1;
    head++;
  }

  return countOne;
};