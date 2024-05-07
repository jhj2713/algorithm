const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = input.slice(1).map((inp) => inp.split(" ").map(Number));

// 시간초과
let answer = 0;

const _coordinates = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
function dfs(i, j) {
  if (i === n - 1 && j === m - 1) {
    answer += 1;
    return;
  }

  _coordinates.forEach(([_i, _j]) => {
    const newI = i + _i;
    const newJ = j + _j;

    if (isRightCoordinate(newI, newJ) && map[i][j] > map[newI][newJ]) {
      dfs(newI, newJ);
    }
  });
}

// dp로 이미 지나간 거리는 또 탐색하지 않도록 최적화
const dp = Array.from(Array(n), () => new Array(m).fill(-1));

const coordinates = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
function dfs(i, j) {
  if (i === n - 1 && j === m - 1) {
    return 1;
  }
  if (dp[i][j] !== -1) {
    return dp[i][j];
  }

  dp[i][j] = 0;
  coordinates.forEach(([_i, _j]) => {
    const newI = i + _i;
    const newJ = j + _j;

    if (isRightCoordinate(newI, newJ) && map[i][j] > map[newI][newJ]) {
      dp[i][j] += dfs(newI, newJ);
    }
  });

  return dp[i][j];
}

function isRightCoordinate(i, j) {
  return i >= 0 && i < n && j >= 0 && j < m;
}

console.log(dfs(0, 0));
