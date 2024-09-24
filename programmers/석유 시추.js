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

function solution(land) {
  const x = land[0].length,
    y = land.length;
  const visited = Array.from(Array(y), () => new Array(x).fill(false));
  const oil = new Array(x).fill(0);

  for (let j = 0; j < x; j++) {
    for (let i = 0; i < y; i++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }

  function bfs(i, j) {
    const coordinates = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    const queue = new Queue();
    queue.enqueue([i, j]);
    visited[i][j] = true;
    let count = 1,
      maxJ = j;

    while (!queue.isEmpty()) {
      const [currentI, currentJ] = queue.dequeue();
      coordinates.forEach(([_i, _j]) => {
        const newI = currentI + _i,
          newJ = currentJ + _j;
        if (newI >= 0 && newI < y && newJ >= 0 && newJ < x && land[newI][newJ] === 1 && !visited[newI][newJ]) {
          visited[newI][newJ] = true;
          queue.enqueue([newI, newJ]);
          count += 1;
          maxJ = Math.max(maxJ, newJ);
        }
      });
    }

    for (let x = j; x <= maxJ; x++) {
      oil[x] += count;
    }
  }

  return Math.max(...oil);
}
