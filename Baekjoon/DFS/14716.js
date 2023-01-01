const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const words = input.slice(1).map((word) => word.split(" ").map(Number));

const positions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
let result = 0;

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (words[i][j] === 1) {
      words[i][j] = 0;
      dfs(i, j);
      result++;
    }
  }
}

console.log(result);

function dfs(i, j) {
  positions.forEach((pos) => {
    if (i + pos[0] >= 0 && i + pos[0] < m && j + pos[1] >= 0 && j + pos[1] < n && words[i + pos[0]][j + pos[1]] === 1) {
      words[i + pos[0]][j + pos[1]] = 0;
      dfs(i + pos[0], j + pos[1]);
    }
  });
}
