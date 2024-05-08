const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [m, n, k] = input[0].split(" ").map(Number);
const rectangles = input.slice(1).map((inp) => inp.split(" ").map(Number));

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(val) {
    this.queue.push(val);
    this.rear += 1;
  }
  dequeue() {
    const val = this.queue[this.front];
    delete this.queue[this.front++];
    return val;
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

// 사각형이 있는 곳은 1, 사각형이 없는 곳은 0으로 표시된 모눈종이
const rect = Array.from(Array(m), () => new Array(n).fill(0));

rectangles.forEach(([j1, i1, j2, i2]) => {
  for (i = i1; i < i2; i++) {
    for (let j = j1; j < j2; j++) {
      rect[i][j] = 1;
    }
  }
});

let answer = 0,
  areas = [];
const visited = Array.from(Array(m), () => new Array(n).fill(false));
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (rect[i][j] === 0 && !visited[i][j]) {
      visited[i][j] = true;
      const area = bfs(i, j, visited);
      areas.push(area);

      answer += 1;
    }
  }
}

console.log(`${answer}\n${areas.sort((a, b) => a - b).join(" ")}`);

function bfs(y, x, visited) {
  const queue = new Queue();
  queue.enqueue([y, x]);

  let area = 1;

  const coordinates = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (!queue.isEmpty()) {
    const [i, j] = queue.dequeue();

    coordinates.forEach(([_i, _j]) => {
      const newI = i + _i;
      const newJ = j + _j;

      if (isRightCoordinates(newI, newJ) && !visited[newI][newJ] && rect[newI][newJ] === 0) {
        visited[newI][newJ] = true;
        queue.enqueue([newI, newJ]);
        area += 1;
      }
    });
  }

  return area;
}

function isRightCoordinates(i, j) {
  return i >= 0 && i < m && j >= 0 && j < n;
}
