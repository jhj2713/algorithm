const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, t] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((data) => data.split(" ").map(Number));
let visited = Array.from(Array(n), () => Array(m).fill(false));

function bfs() {
  let queue = [[0, 0, 0]];
  let min = Infinity;
  while (queue.length !== 0) {
    const [i, j, time] = queue.shift();
    if (time > t) continue;

    if (i === n - 1 && j === m - 1 && time <= t) min = Math.min(min, time);
    if (arr[i][j] === 2 && time + (n - i - 1) + (m - j - 1) <= t) {
      min = Math.min(min, time + (n - i - 1) + (m - j - 1));
      continue;
    }

    if (i !== 0 && arr[i - 1][j] !== 1 && !visited[i - 1][j]) {
      visited[i - 1][j] = true;
      queue.push([i - 1, j, time + 1]);
    }
    if (j !== 0 && arr[i][j - 1] !== 1 && !visited[i][j - 1]) {
      visited[i][j - 1] = true;
      queue.push([i, j - 1, time + 1]);
    }
    if (i !== n - 1 && arr[i + 1][j] !== 1 && !visited[i + 1][j]) {
      visited[i + 1][j] = true;
      queue.push([i + 1, j, time + 1]);
    }
    if (j !== m - 1 && arr[i][j + 1] !== 1 && !visited[i][j + 1]) {
      visited[i][j + 1] = true;
      queue.push([i, j + 1, time + 1]);
    }
  }

  console.log(min === Infinity ? "Fail" : min);
}

bfs();
