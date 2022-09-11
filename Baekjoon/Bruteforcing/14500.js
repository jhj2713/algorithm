const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((data) => data.split(" ").map(Number));

let visited = Array.from(Array(n), () => Array(m).fill(false));

function findMax(i, j, cnt) {
  if (cnt === 4) return 0;
  let max = 0,
    tmp = 0;
  if (i !== 0 && !visited[i - 1][j]) {
    visited[i - 1][j] = true;
    tmp = findMax(i - 1, j, cnt + 1);
    max = Math.max(max, tmp);
    visited[i - 1][j] = false;
  }
  if (j !== 0 && !visited[i][j - 1]) {
    visited[i][j - 1] = true;
    tmp = findMax(i, j - 1, cnt + 1);
    max = Math.max(max, tmp);
    visited[i][j - 1] = false;
  }
  if (i !== n - 1 && !visited[i + 1][j]) {
    visited[i + 1][j] = true;
    tmp = findMax(i + 1, j, cnt + 1);
    max = Math.max(max, tmp);
    visited[i + 1][j] = false;
  }
  if (j !== m - 1 && !visited[i][j + 1]) {
    visited[i][j + 1] = true;
    tmp = findMax(i, j + 1, cnt + 1);
    max = Math.max(max, tmp);
    visited[i][j + 1] = false;
  }

  return arr[i][j] + max;
}

function findException(i, j) {
  let max = 0,
    tmp = 0;
  if (j > 0 && j < m - 1 && i < n - 1) {
    tmp = arr[i][j - 1] + arr[i][j] + arr[i][j + 1] + arr[i + 1][j];
    max = Math.max(max, tmp);
  }
  if (j > 0 && j < m - 1 && i > 0) {
    tmp = arr[i][j - 1] + arr[i][j] + arr[i][j + 1] + arr[i - 1][j];
    max = Math.max(max, tmp);
  }
  if (i > 0 && i < n - 1 && j < m - 1) {
    tmp = arr[i - 1][j] + arr[i][j] + arr[i + 1][j] + arr[i][j + 1];
    max = Math.max(max, tmp);
  }
  if (i > 0 && i < n - 1 && j > 0) {
    tmp = arr[i - 1][j] + arr[i][j] + arr[i + 1][j] + arr[i][j - 1];
    max = Math.max(max, tmp);
  }

  return max;
}

function traversal() {
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      visited[i][j] = true;
      const tmp = Math.max(findMax(i, j, 0), findException(i, j));
      max = Math.max(max, tmp);
      visited[i][j] = false;
    }
  }

  console.log(max);
}

traversal();
