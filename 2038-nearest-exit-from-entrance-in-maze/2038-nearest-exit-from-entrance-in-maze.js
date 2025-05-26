/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
function nearestExit(maze, entrance) {
  const m = maze.length;
  const n = maze[0].length;
  const [startRow, startCol] = entrance;

  const directions = [
    [0, 1],  
    [0, -1], 
    [1, 0], 
    [-1, 0]  
  ];

  const queue = [[startRow, startCol, 0]];
  maze[startRow][startCol] = '+';

  while (queue.length) {
    const [row, col, steps] = queue.shift();

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 && newRow < m &&
        newCol >= 0 && newCol < n &&
        maze[newRow][newCol] === '.'
      ) {
        if (
          newRow === 0 || newRow === m - 1 ||
          newCol === 0 || newCol === n - 1
        ) {
          return steps + 1;
        }

        maze[newRow][newCol] = '+';
        queue.push([newRow, newCol, steps + 1]);
      }
    }
  }

  return -1; // 출구 없음
}