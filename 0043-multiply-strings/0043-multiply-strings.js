/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'

  const res = Array(num1.length + num2.length).fill(0)

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const mul = (num1[i] - '0') * (num2[j] - '0')
      const sum = mul + res[i + j + 1]

      res[i + j + 1] = sum % 10
      res[i + j] += Math.floor(sum / 10)
    }
  }

  if(res[0] === 0){
    res.shift();
  }

  return res.join('')
}