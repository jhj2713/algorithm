const fs = require("fs");
const [num, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = Number(num);
let pre = 0;

let answer = "";
for (let i = 0; i < t; i++) {
  let [m, n, k] = input[pre++].split(" ").map((str) => Number(str));
  let arr = new Array(n);
  let visited = new Array(n);
  for (let j = 0; j < n; j++) {
    arr[j] = new Array(m).fill(0);
    visited[j] = new Array(m).fill(false);
  }
  for (let j = 0; j < k; j++) {
    let [x, y] = input[pre++].split(" ").map((str) => Number(str));
    arr[y][x] = 1;
  }

  let result = 0;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (arr[y][x] === 1 && !visited[y][x]) {
        dfs(arr, y, x, n, m, visited);
        result++;
      }
    }
  }
  answer += result + "\n";
}

console.log(answer);

function dfs(arr, a, b, n, m, visited) {
  if (a !== 0 && arr[a - 1][b] === 1 && !visited[a - 1][b]) {
    visited[a - 1][b] = true;
    dfs(arr, a - 1, b, n, m, visited);
  }
  if (a !== n - 1 && arr[a + 1][b] === 1 && !visited[a + 1][b]) {
    visited[a + 1][b] = true;
    dfs(arr, a + 1, b, n, m, visited);
  }
  if (b !== 0 && arr[a][b - 1] === 1 && !visited[a][b - 1]) {
    visited[a][b - 1] = true;
    dfs(arr, a, b - 1, n, m, visited);
  }
  if (b !== m - 1 && arr[a][b + 1] === 1 && !visited[a][b + 1]) {
    visited[a][b + 1] = true;
    dfs(arr, a, b + 1, n, m, visited);
  }
}
