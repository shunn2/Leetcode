/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
 let a = 0;
  let b = 0;

  for (let i = 1; i < colors.length - 1; i++) {
    if (colors[i - 1] === colors[i] && colors[i + 1] === colors[i]) {
      colors[i] === "A" ? a++ : b++;
    }
  }

  return a > b;
};