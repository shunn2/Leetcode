/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    const m = isWater.length;
    const n = isWater[0].length;

    // Initialize the height matrix with -1 (unvisited)
    const height = Array.from({ length: m }, () => Array(n).fill(-1));

    // Directions for moving north, east, south, and west
    const directions = [
        [-1, 0], // north
        [1, 0],  // south
        [0, -1], // west
        [0, 1]   // east
    ];

    // Use an array as a deque for BFS
    const queue = [];

    // Initialize the queue with all water cells and set their height to 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    let front = 0; // Track the front of the queue

    // Perform BFS
    while (front < queue.length) {
        const [x, y] = queue[front++];

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Check if the new position is within bounds and unvisited
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
                height[nx][ny] = height[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return height;
};