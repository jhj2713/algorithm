const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  isEmpty() {
    return this.rear === this.front;
  }
}

// 빈 칸(0, 0부터)을 bfs하면서 맞닿는 분의 치즈를 녹인다
function solution(input) {
  let hour = 0,
    remain = 0;

  const [n, m] = input[0].split(" ").map(Number);
  const inputArr = input.slice(1).map((i) => i.split(" ").map(Number));

  const queue = new Queue();
  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  const coordinates = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  while (true) {
    queue.enqueue([0, 0]);
    initializeVisited(visited);
    const cheese = [];

    while (!queue.isEmpty()) {
      const [y, x] = queue.dequeue();

      coordinates.forEach(([_y, _x]) => {
        const newY = y + _y;
        const newX = x + _x;

        if (isRightCoordinate(newY, newX)) {
          visited[newY][newX] = true;
          if (inputArr[newY][newX]) {
            // 공기가 닿은 치즈
            cheese.push([newY, newX]);
          } else {
            // 빈칸
            queue.enqueue([newY, newX]);
          }
        }
      });
    }

    if (cheese.length === 0) {
      break;
    }

    remain = cheese.length;
    cheese.forEach(([y, x]) => {
      inputArr[y][x] = 0;
    });

    hour += 1;
  }

  function initializeVisited() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        visited[i][j] = false;
      }
    }
  }
  function isRightCoordinate(i, j) {
    return i >= 0 && i < n && j >= 0 && j < m && !visited[i][j];
  }

  return `${hour}\n${remain}`;
}

console.log(solution(input));
