const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const geometry = input.slice(1).map((inp) => inp.split(" ").map(Number));

let answer = 0;

const coordinate = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
function isRightCoordinate(i, j) {
  return i >= 0 && i < n && j >= 0 && j < n;
}
function dfs(i, j, threshold, visited) {
  coordinate.forEach(([_i, _j]) => {
    const newI = i + _i;
    const newJ = j + _j;

    if (isRightCoordinate(newI, newJ) && geometry[newI][newJ] >= threshold && !visited[newI][newJ]) {
      visited[newI][newJ] = true;
      dfs(newI, newJ, threshold, visited);
    }
  });
}

for (let t = 0; t < 101; t++) {
  // 비의 양 t
  let count = 0;
  const visited = Array.from(Array(n), () => new Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && geometry[i][j] >= t) {
        visited[i][j] = true;
        dfs(i, j, t, visited);
        count += 1;
      }
    }
  }

  answer = Math.max(count, answer);
}

console.log(answer);
