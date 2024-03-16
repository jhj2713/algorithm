const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const cheese = input.slice(1).map((inp) => inp.split(" ").map(Number));
let time = 0;

while (true) {
  if (isEmpty()) {
    break;
  }

  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  const matchCount = Array.from(Array(n), () => new Array(m).fill(0)); // 공기와 접촉한 횟수 저장
  visited[0][0] = true;
  dfs(0, 0, visited, matchCount);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matchCount[i][j] >= 2) {
        // 공기와 접촉된 변이 2변 이상인 경우
        cheese[i][j] = 0;
      }
    }
  }

  time += 1;
}

console.log(time);

function dfs(i, j, visited, matchCount) {
  const coordinates = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  coordinates.forEach(([_i, _j]) => {
    const newI = i + _i;
    const newJ = j + _j;

    if (isRightCoordinate(newI, newJ) && !visited[newI][newJ]) {
      if (cheese[newI][newJ] === 0) {
        // 비어있는 공간
        visited[newI][newJ] = true;
        dfs(newI, newJ, visited, matchCount);
      } else {
        // 치즈인 공간
        matchCount[newI][newJ] += 1;
      }
    }
  });
}
function isRightCoordinate(i, j) {
  return i >= 0 && i < n && j >= 0 && j < m;
}
function isEmpty() {
  return cheese.every((c) => c.every((_c) => _c === 0));
}
