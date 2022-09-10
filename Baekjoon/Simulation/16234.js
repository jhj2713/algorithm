const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, l, r] = input[0].split(" ").map(Number);
let arr = [];
input.slice(1).forEach((data) => arr.push(data.split(" ").map(Number)));

function setUnion(union, set, i, j) {
  union[set].push([i, j]);
}

function dfs(i, j, set, union, visited) {
  if (i !== 0 && !visited[i - 1][j] && Math.abs(arr[i - 1][j] - arr[i][j]) >= l && Math.abs(arr[i - 1][j] - arr[i][j]) <= r) {
    visited[i - 1][j] = true;
    setUnion(union, set, i - 1, j);
    dfs(i - 1, j, set, union, visited);
  }
  if (j !== 0 && !visited[i][j - 1] && Math.abs(arr[i][j - 1] - arr[i][j]) >= l && Math.abs(arr[i][j - 1] - arr[i][j]) <= r) {
    visited[i][j - 1] = true;
    setUnion(union, set, i, j - 1);
    dfs(i, j - 1, set, union, visited);
  }
  if (i !== n - 1 && !visited[i + 1][j] && Math.abs(arr[i + 1][j] - arr[i][j]) >= l && Math.abs(arr[i + 1][j] - arr[i][j]) <= r) {
    visited[i + 1][j] = true;
    setUnion(union, set, i + 1, j);
    dfs(i + 1, j, set, union, visited);
  }
  if (j !== n - 1 && !visited[i][j + 1] && Math.abs(arr[i][j + 1] - arr[i][j]) >= l && Math.abs(arr[i][j + 1] - arr[i][j]) <= r) {
    visited[i][j + 1] = true;
    setUnion(union, set, i, j + 1);
    dfs(i, j + 1, set, union, visited);
  }
}

function process() {
  let set = 0;
  let visited = Array.from(Array(n), () => Array(n).fill(false)),
    union = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;
        union.push([[i, j]]);
        dfs(i, j, set, union, visited);
        set++;
      }
    }
  }

  union.forEach((set) => {
    const avg = Math.floor(set.reduce((acc, val) => acc + arr[val[0]][val[1]], 0) / set.length);
    set.forEach(([i, j]) => (arr[i][j] = avg));
  });

  return union.length !== n * n;
}

function main() {
  let day = 0;
  while (process()) day++;
  console.log(day);
}

main();
