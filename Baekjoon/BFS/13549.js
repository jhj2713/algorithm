const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

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

const [n, m] = input.map(Number);

const visited = new Array(100001).fill(false);

let answer = 0;
const queue = new Queue();
queue.enqueue([n, 0]);
while (!queue.isEmpty()) {
  const [x, val] = queue.dequeue();

  if (x === m) {
    answer = val;
    break;
  }

  if (isRightCoordinate(x * 2) && !visited[x * 2]) {
    queue.enqueue([x * 2, val]);
    visited[x * 2] = true;
  }

  if (isRightCoordinate(x - 1) && !visited[x - 1]) {
    queue.enqueue([x - 1, val + 1]);
    visited[x - 1] = true;
  }
  if (isRightCoordinate(x + 1) && !visited[x + 1]) {
    queue.enqueue([x + 1, val + 1]);
    visited[x + 1] = true;
  }
}

function isRightCoordinate(x) {
  return x >= 0 && x <= 100000;
}

console.log(answer);
