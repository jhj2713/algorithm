const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

const input = arr.map((str) => str.split(""));
let visited = new Array(n);
for (let i = 0; i < n; i++) {
  visited[i] = new Array(n).fill(false);
}

let normal_cnt = 0;
let rg_cnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      normal_cnt++;
      normal_bfs(input[i][j], i, j);
    }
  }
}

for (let i = 0; i < n; i++) {
  visited[i] = new Array(n).fill(false);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      rg_cnt++;
      if (input[i][j] === "B") normal_bfs(input[i][j], i, j);
      else rg_bfs(i, j);
    }
  }
}

function normal_bfs(color, i, j) {
  let queue = [[i, j]];
  while (queue.length !== 0) {
    let [x, y] = queue.pop();
    if (x !== 0 && !visited[x - 1][y] && input[x - 1][y] === color) {
      visited[x - 1][y] = true;
      queue.push([x - 1, y]);
    }
    if (x !== n - 1 && !visited[x + 1][y] && input[x + 1][y] === color) {
      visited[x + 1][y] = true;
      queue.push([x + 1, y]);
    }
    if (y !== 0 && !visited[x][y - 1] && input[x][y - 1] === color) {
      visited[x][y - 1] = true;
      queue.push([x, y - 1]);
    }
    if (y !== n - 1 && !visited[x][y + 1] && input[x][y + 1] === color) {
      visited[x][y + 1] = true;
      queue.push([x, y + 1]);
    }
  }
}

function rg_bfs(i, j) {
  let queue = [[i, j]];
  while (queue.length !== 0) {
    let [x, y] = queue.pop();
    if (x !== 0 && !visited[x - 1][y] && input[x - 1][y] !== "B") {
      visited[x - 1][y] = true;
      queue.push([x - 1, y]);
    }
    if (x !== n - 1 && !visited[x + 1][y] && input[x + 1][y] !== "B") {
      visited[x + 1][y] = true;
      queue.push([x + 1, y]);
    }
    if (y !== 0 && !visited[x][y - 1] && input[x][y - 1] !== "B") {
      visited[x][y - 1] = true;
      queue.push([x, y - 1]);
    }
    if (y !== n - 1 && !visited[x][y + 1] && input[x][y + 1] !== "B") {
      visited[x][y + 1] = true;
      queue.push([x, y + 1]);
    }
  }
}

console.log(normal_cnt, rg_cnt);
