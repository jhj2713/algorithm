const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const ice = input.slice(1).map((inp) => inp.split(" ").map(Number));

const coordinates = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let answer = 1;
while (true) {
  const tmpIce = ice.map((_ice) => [..._ice]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (ice[i][j] === 0) {
        continue;
      }

      const countSea = coordinates.filter(([_i, _j]) => isRightCoordinate(i + _i, j + _j) && ice[i + _i][j + _j] === 0).length;

      tmpIce[i][j] -= countSea;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (ice[i][j] !== tmpIce[i][j]) {
        ice[i][j] = tmpIce[i][j] < 0 ? 0 : tmpIce[i][j];
      }
    }
  }

  if (isEnd()) {
    answer = 0;
    break;
  }

  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (ice[i][j] !== 0 && !visited[i][j]) {
        visited[i][j] = true;
        dfs(i, j, visited);
        count += 1;
      }
    }
  }

  if (count >= 2) {
    break;
  }

  answer += 1;
}

function dfs(i, j, visited) {
  coordinates.forEach(([_i, _j]) => {
    const newI = i + _i;
    const newJ = j + _j;

    if (isRightCoordinate(newI, newJ) && ice[newI][newJ] !== 0 && !visited[newI][newJ]) {
      visited[newI][newJ] = true;
      dfs(newI, newJ, visited);
    }
  });
}

function isEnd() {
  return ice.every((_ice) => _ice.every((i) => i === 0));
}

function isRightCoordinate(i, j) {
  return i >= 0 && i < n && j >= 0 && j < m;
}

console.log(answer);
