const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = input.slice(1).map((m) => m.split(" ").map(Number));
let visited = Array.from(Array(n), () => new Array(m).fill(false));
let answer = Array.from(Array(n), () => new Array(m).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      bfs(i, j);
      break;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1 && answer[i][j] === 0) {
      answer[i][j] = -1;
    }
  }
}

console.log(answer.map((ans) => ans.join(" ")).join("\n"));

function bfs(i, j) {
  let queue = [[i, j]];
  visited[i][j] = true;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    if (x !== 0 && !visited[x - 1][y] && map[x - 1][y] === 1) {
      visited[x - 1][y] = true;
      answer[x - 1][y] = answer[x][y] + 1;
      queue.push([x - 1, y]);
    }
    if (y !== 0 && !visited[x][y - 1] && map[x][y - 1] === 1) {
      visited[x][y - 1] = true;
      answer[x][y - 1] = answer[x][y] + 1;
      queue.push([x, y - 1]);
    }
    if (x !== n - 1 && !visited[x + 1][y] && map[x + 1][y] === 1) {
      visited[x + 1][y] = true;
      answer[x + 1][y] = answer[x][y] + 1;
      queue.push([x + 1, y]);
    }
    if (y !== m - 1 && !visited[x][y + 1] && map[x][y + 1] === 1) {
      visited[x][y + 1] = true;
      answer[x][y + 1] = answer[x][y] + 1;
      queue.push([x, y + 1]);
    }
  }
}
