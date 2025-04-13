/**
 * @param {string} expression
 * @return {number[]}
 */
function diffWaysToCompute(expression) {
  const memo = new Map();

  function helper(expr) {
    const results = [];

    for (let i = 0; i < expr.length; i++) {
      const char = expr[i];

      if (char === '+' || char === '-' || char === '*') {
        const leftResults = helper(expr.slice(0, i));
        const rightResults = helper(expr.slice(i + 1));

        for (const left of leftResults) {
          for (const right of rightResults) {
            if (char === '+') results.push(left + right);
            if (char === '-') results.push(left - right);
            if (char === '*') results.push(left * right);
          }
        }
      }
    }

    if (results.length === 0) {
      results.push(Number(expr));
    }

    memo.set(expr, results);
    return results;
  }

  return helper(expression);
}