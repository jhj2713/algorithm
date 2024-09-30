const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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

const n = Number(input[0]);
const k = Number(input[1]);
const apples = input.slice(2, 2 + k).map((inp) => inp.split(" ").map((num) => Number(num) - 1));
const l = Number(input[2 + k]);
const snakeDirections = input.slice(3 + k).map((inp) => inp.split(" "));

// 빈칸 0, 뱀 1, 사과 2
const board = Array.from({ length: n }, () => new Array(n).fill(0));
apples.forEach(([y, x]) => {
  board[y][x] = 2;
});

const directionDict = {};
snakeDirections.forEach(([sec, dir]) => {
  directionDict[sec] = dir === "D" ? 1 : 3;
});

const directionMap = ["R", "B", "L", "T"];
const positionMap = {
  R: [0, 1],
  L: [0, -1],
  T: [-1, 0],
  B: [1, 0],
};

let directionIdx = 0,
  answer = 0;
let currentY = 0,
  currentX = 0;

const coordinateQueue = new Queue();
board[currentY][currentX] = 1;
coordinateQueue.enqueue([currentY, currentX]);

while (true) {
  if (directionDict[answer] !== undefined) {
    directionIdx = (directionIdx + directionDict[answer]) % 4;
  }

  const [yDiff, xDiff] = positionMap[directionMap[directionIdx]];
  const newY = currentY + yDiff,
    newX = currentX + xDiff;

  answer += 1;

  if (newY < 0 || newY >= n || newX < 0 || newX >= n || board[newY][newX] === 1) {
    break;
  }

  // 빈 곳인 경우
  if (board[newY][newX] === 0) {
    const [rearY, rearX] = coordinateQueue.dequeue();
    board[rearY][rearX] = 0;
  }
  currentX = newX;
  currentY = newY;
  board[currentY][currentX] = 1;
  coordinateQueue.enqueue([currentY, currentX]);
}

console.log(answer);
