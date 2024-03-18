const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const A = input.slice(1, 1 + n).map((inp) => inp.split(" ").map(Number));
const moveInfo = input.slice(n + 1).map((inp) => inp.split(" ").map(Number));

const moveDirection = [
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
];
let cloudCoordinate = [
  [n - 1, 0],
  [n - 2, 0],
  [n - 1, 1],
  [n - 2, 1],
];
moveInfo.forEach((info) => {
  const [dir, len] = info;

  /**
   * 1. 구름 이동
   */
  cloudCoordinate.forEach((_, idx) => {
    cloudCoordinate[idx][0] = (cloudCoordinate[idx][0] + moveDirection[dir - 1][0] * len) % n;
    cloudCoordinate[idx][1] = (cloudCoordinate[idx][1] + moveDirection[dir - 1][1] * len) % n;

    cloudCoordinate[idx][0] = cloudCoordinate[idx][0] < 0 ? cloudCoordinate[idx][0] + n : cloudCoordinate[idx][0];
    cloudCoordinate[idx][1] = cloudCoordinate[idx][1] < 0 ? cloudCoordinate[idx][1] + n : cloudCoordinate[idx][1];
  });

  /**
   * 2. 구름이 있는 칸에 비가 1씩 내림
   */
  const isCloud = Array.from(Array(n), () => new Array(n).fill(false));
  cloudCoordinate.forEach(([cloudY, cloudX]) => {
    A[cloudY][cloudX] += 1;
    isCloud[cloudY][cloudX] = true;
  });

  /**
   * 3. 대각선에 있는 물 개수만큼 물의 양이 더해짐
   */
  cloudCoordinate.forEach(([cloudY, cloudX]) => {
    if (cloudY > 0 && cloudX > 0 && A[cloudY - 1][cloudX - 1]) {
      // 왼쪽 위 대각선에 물 존재
      A[cloudY][cloudX] += 1;
    }
    if (cloudY < n - 1 && cloudX > 0 && A[cloudY + 1][cloudX - 1]) {
      // 왼쪽 아래 대각선에 물 존재
      A[cloudY][cloudX] += 1;
    }
    if (cloudY > 0 && cloudX < n - 1 && A[cloudY - 1][cloudX + 1]) {
      // 오른쪽 위 대각선에 물 존재
      A[cloudY][cloudX] += 1;
    }
    if (cloudY < n - 1 && cloudX < n - 1 && A[cloudY + 1][cloudX + 1]) {
      // 오른쪽 아래 대각선에 물 존재
      A[cloudY][cloudX] += 1;
    }
  });

  /**
   * 4. 구름이 있던 칸을 제외하고 물의 양이 2 이상인 칸에 구름이 생겨 물의 양이 2만큼 줄어듦
   */
  const newClouds = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!isCloud[i][j] && A[i][j] >= 2) {
        A[i][j] -= 2;
        newClouds.push([i, j]);
      }
    }
  }
  cloudCoordinate = [...newClouds];
});

console.log(A.reduce((acc, val) => acc + val.reduce((_acc, _val) => _acc + _val, 0), 0));
