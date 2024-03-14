const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const office = input.slice(1).map((inp) => inp.split(" ").map(Number));

const cctv = [];
// CCTV 정보 저장 (i, j, type)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (office[i][j] >= 1 && office[i][j] <= 5) {
      cctv.push([i, j, office[i][j]]);
    }
  }
}

let min = Infinity;
dfs(0, office);

console.log(min);

// CCTV 정보에 맞게 감시 방향 표시
function dfs(idx, office) {
  if (idx === cctv.length) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (office[i][j] === 0) count += 1;
      }
    }

    min = Math.min(count, min);
    return;
  }

  const [y, x, type] = cctv[idx];
  let officeCopy = getArrayCopy(office);

  if (type === 1) {
    // 한 쪽 방향만 감시

    // 위쪽 감시
    upWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 아래쪽 감시
    officeCopy = getArrayCopy(office);
    downWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 오른쪽 감시
    officeCopy = getArrayCopy(office);
    rightWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 왼쪽 감시
    officeCopy = getArrayCopy(office);
    leftWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);
  }

  if (type === 2) {
    // 반대 방향의 두 방향을 감시

    // 위아래 감시
    upWatch(x, y, officeCopy);
    downWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 왼오 감시
    officeCopy = getArrayCopy(office);
    leftWatch(x, y, officeCopy);
    rightWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);
  }

  if (type === 3) {
    // 직각 두 방향을 감시

    // 위오 감시
    upWatch(x, y, officeCopy);
    rightWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 오아 감시
    officeCopy = getArrayCopy(office);
    rightWatch(x, y, officeCopy);
    downWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 아왼 감시
    officeCopy = getArrayCopy(office);
    downWatch(x, y, officeCopy);
    leftWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 왼위 감시
    officeCopy = getArrayCopy(office);
    leftWatch(x, y, officeCopy);
    upWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);
  }

  if (type === 4) {
    // 세 방향 감시

    // 위오아 감시
    upWatch(x, y, officeCopy);
    rightWatch(x, y, officeCopy);
    downWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 오아왼 감시
    officeCopy = getArrayCopy(office);
    rightWatch(x, y, officeCopy);
    downWatch(x, y, officeCopy);
    leftWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 아왼위 감시
    officeCopy = getArrayCopy(office);
    downWatch(x, y, officeCopy);
    leftWatch(x, y, officeCopy);
    upWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);

    // 왼위오 감시
    officeCopy = getArrayCopy(office);
    leftWatch(x, y, officeCopy);
    upWatch(x, y, officeCopy);
    rightWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);
  }

  if (type === 5) {
    leftWatch(x, y, officeCopy);
    upWatch(x, y, officeCopy);
    rightWatch(x, y, officeCopy);
    downWatch(x, y, officeCopy);
    dfs(idx + 1, officeCopy);
  }
}

function leftWatch(x, y, officeCopy) {
  for (let i = x - 1; i >= 0; i--) {
    if (officeCopy[y][i] === 6) {
      break;
    }
    officeCopy[y][i] = -1;
  }
}
function rightWatch(x, y, officeCopy) {
  for (let i = x + 1; i < m; i++) {
    if (officeCopy[y][i] === 6) {
      break;
    }
    officeCopy[y][i] = -1;
  }
}

function upWatch(x, y, officeCopy) {
  for (let i = y - 1; i >= 0; i--) {
    if (officeCopy[i][x] === 6) {
      break;
    }
    officeCopy[i][x] = -1;
  }
}
function downWatch(x, y, officeCopy) {
  for (let i = y + 1; i < n; i++) {
    if (officeCopy[i][x] === 6) {
      break;
    }
    officeCopy[i][x] = -1;
  }
}

function getArrayCopy(arr) {
  return arr.map((a) => [...a]);
}
