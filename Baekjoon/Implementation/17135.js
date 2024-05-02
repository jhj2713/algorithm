const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, d] = input[0].split(" ").map(Number);
const tornado = input.slice(1).map((inp) => inp.split(" ").map(Number));

const orders = [];

// 가능한 위치 조합 구하기
function dfsOrder(idx, visited, selected) {
  if (selected.length === 3) {
    orders.push([...selected]);
    return;
  }

  for (let i = idx; i < m; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfsOrder(i + 1, visited, [...selected, i]);
      visited[i] = false;
    }
  }
}

const visited = new Array(m).fill(false);
dfsOrder(0, visited, []);

// 막을 수 있는 적의 수 구하기
let answer = 0;
orders.forEach((order) => {
  let currentTornado = tornado.map((t) => [...t]);
  let currentCount = 0;

  for (let t = 0; t < n; t++) {
    const selectedEnemy = [];
    order.forEach((o) => {
      let minDistance = d + 1,
        minCoordinate = [-1, -1];
      for (let i = n - 1 - t; i >= 0; i--) {
        for (let j = 0; j < m; j++) {
          const distance = Math.abs(i - n + t) + Math.abs(j - o);
          if (distance <= minDistance && currentTornado[i][j] === 1) {
            if (distance === minDistance && j > minCoordinate[1]) {
              continue;
            }
            minDistance = distance;
            minCoordinate = [i, j];
          }
        }
      }

      if (minCoordinate[0] !== -1) {
        selectedEnemy.push([minCoordinate[0], minCoordinate[1]]);
      }
    });

    selectedEnemy.forEach((enemy) => {
      const [i, j] = enemy;
      if (currentTornado[i][j]) {
        currentTornado[i][j] = 0;
        currentCount += 1;
      }
    });

    answer = Math.max(currentCount, answer);
  }
});

console.log(answer);
