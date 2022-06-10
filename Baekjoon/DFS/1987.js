const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [r, c] = arr[0].split(" ").map((str) => Number(str));
const input = arr.slice(1).map((str) => str.split(""));
let visited = {
  A: false,
  B: false,
  C: false,
  D: false,
  E: false,
  F: false,
  G: false,
  H: false,
  I: false,
  J: false,
  K: false,
  L: false,
  M: false,
  N: false,
  O: false,
  P: false,
  Q: false,
  R: false,
  S: false,
  T: false,
  U: false,
  V: false,
  W: false,
  X: false,
  Y: false,
  Z: false,
};
let max = 0;

function dfs(x, y, sum) {
  max = Math.max(max, sum + 1);
  if (x !== 0 && !visited[input[x - 1][y]]) {
    visited[input[x - 1][y]] = true;
    dfs(x - 1, y, sum + 1);
    visited[input[x - 1][y]] = false;
  }
  if (x !== r - 1 && !visited[input[x + 1][y]]) {
    visited[input[x + 1][y]] = true;
    dfs(x + 1, y, sum + 1);
    visited[input[x + 1][y]] = false;
  }
  if (y !== 0 && !visited[input[x][y - 1]]) {
    visited[input[x][y - 1]] = true;
    dfs(x, y - 1, sum + 1);
    visited[input[x][y - 1]] = false;
  }
  if (y !== c - 1 && !visited[input[x][y + 1]]) {
    visited[input[x][y + 1]] = true;
    dfs(x, y + 1, sum + 1);
    visited[input[x][y + 1]] = false;
  }
}

visited[input[0][0]] = true;
dfs(0, 0, 0);

console.log(max);
