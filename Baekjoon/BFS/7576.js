const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [m, n] = arr[0].split(" ").map((s) => Number(s));

let input = arr.map((str) => str.split(" ").map((s) => Number(s)));
let queue = [];
let visited = new Array(n);
for (let i = 0; i < n; i++) {
  visited[i] = new Array(m).fill(false);
}

let cnt = 0;
let answer = -1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 1) {
      queue.push([i, j]);
      visited[i][j] = true;
      cnt++;
    } else if (input[i][j] === -1) {
      cnt++;
    }
  }
}

while (queue.length !== 0) {
  answer++;
  let len = queue.length;
  let tmp_queue = [...queue];
  queue = [];
  for (let i = 0; i < len; i++) {
    let [x, y] = tmp_queue.pop();
    if (x !== 0 && input[x - 1][y] === 0 && !visited[x - 1][y]) {
      queue.push([x - 1, y]);
      visited[x - 1][y] = true;
      cnt++;
    }
    if (x !== n - 1 && input[x + 1][y] === 0 && !visited[x + 1][y]) {
      queue.push([x + 1, y]);
      visited[x + 1][y] = true;
      cnt++;
    }
    if (y !== 0 && input[x][y - 1] === 0 && !visited[x][y - 1]) {
      queue.push([x, y - 1]);
      visited[x][y - 1] = true;
      cnt++;
    }
    if (y !== m - 1 && input[x][y + 1] === 0 && !visited[x][y + 1]) {
      queue.push([x, y + 1]);
      visited[x][y + 1] = true;
      cnt++;
    }
  }
}

console.log(cnt !== n * m ? -1 : answer);
