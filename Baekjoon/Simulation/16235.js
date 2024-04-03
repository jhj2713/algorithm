const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const a = input.slice(1, 1 + n).map((str) => str.split(" ").map(Number));
const treeInfo = input.slice(1 + n).map((str) => str.split(" ").map(Number));

const food = Array.from(Array(n), () => new Array(n).fill(5)); // 땅의 양분이 저장
const ageInfo = Array.from(Array(n), () => new Array(n).fill().map(() => [])); // 나무의 좌표의 나이가 저장

treeInfo.forEach((info) => {
  const [x, y, age] = info;

  ageInfo[x - 1][y - 1].push(age);
});

for (let t = 0; t < k; t++) {
  /**
   * 봄
   * 나무가 자신의 나이만큼 양분을 먹고 나이가 1 증가
   * 땅에 양분이 부족해서 나이만큼 양분을 먹을 수 없는 나무는 죽음
   */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 나이가 작은 순서대로 정렬
      ageInfo[i][j] = ageInfo[i][j].sort((a, b) => a - b);
    }
  }

  const tmpDead = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (ageInfo[i][j].length === 0) continue;

      let deadIdx = -1;
      for (let l = 0; l < ageInfo[i][j].length; l++) {
        if (ageInfo[i][j][l] <= food[i][j]) {
          // 양분을 먹고 나이를 먹을 수 있는 경우
          food[i][j] -= ageInfo[i][j][l];
          ageInfo[i][j][l] += 1;
        } else {
          // 양분을 먹고 나이를 먹을 수 없는 경우
          deadIdx = l;
          break;
        }
      }

      if (deadIdx !== -1) {
        for (let l = deadIdx; l < ageInfo[i][j].length; l++) {
          tmpDead.push([i, j, ageInfo[i][j][l]]);
        }

        ageInfo[i][j] = ageInfo[i][j].slice(0, deadIdx);
      }
    }
  }

  /**
   * 여름
   * 봄에 죽은 나무가 양분으로 변함 (양분은 죽은 나무 나이를 2로 나눈 값)
   */
  tmpDead.forEach(([x, y, age]) => {
    food[x][y] += Math.floor(age / 2);
  });

  /**
   * 가을
   * 나이가 5의 배수인 나무가 번식하는 것으로 인접한 8개의 칸에 나이가 1인 나무가 생김
   */
  const nearCoordinates = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (ageInfo[i][j].length === 0) continue;

      for (let l = 0; l < ageInfo[i][j].length; l++) {
        const age = ageInfo[i][j][l];
        if (age % 5 === 0) {
          nearCoordinates.forEach(([_x, _y]) => {
            const newX = i + _x,
              newY = j + _y;
            if (isRightCoordinate(newX, newY)) {
              ageInfo[newX][newY].push(1);
            }
          });
        }
      }
    }
  }

  /**
   * 겨울
   * 각 칸에 양분이 추가됨
   */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      food[i][j] += a[i][j];
    }
  }
}

function isRightCoordinate(x, y) {
  return x >= 0 && x < n && y >= 0 && y < n;
}

const count = ageInfo.reduce((acc, val) => acc + val.reduce((_acc, _val) => _acc + _val.length, 0), 0);
console.log(count);
