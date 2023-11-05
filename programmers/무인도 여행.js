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
    return this.front === this.rear;
  }
}

function solution(maps) {
  const answer = [];
  const islandMap = maps.map((map) => map.split(""));
  const yLength = islandMap.length,
    xLength = islandMap[0].length;

  function bfs(y, x, val) {
    let sumValue = val;
    const queue = new Queue();
    queue.enqueue([y, x]);
    while (!queue.isEmpty()) {
      const [i, j] = queue.dequeue();
      if (i !== 0 && islandMap[i - 1][j] !== "X") {
        const curValue = parseInt(islandMap[i - 1][j]);
        islandMap[i - 1][j] = "X";
        queue.enqueue([i - 1, j]);
        sumValue += curValue;
      }
      if (j !== 0 && islandMap[i][j - 1] !== "X") {
        const curValue = parseInt(islandMap[i][j - 1]);
        islandMap[i][j - 1] = "X";
        queue.enqueue([i, j - 1]);
        sumValue += curValue;
      }
      if (i !== yLength - 1 && islandMap[i + 1][j] !== "X") {
        const curValue = parseInt(islandMap[i + 1][j]);
        islandMap[i + 1][j] = "X";
        queue.enqueue([i + 1, j]);
        sumValue += curValue;
      }
      if (j !== xLength - 1 && islandMap[i][j + 1] !== "X") {
        const curValue = parseInt(islandMap[i][j + 1]);
        islandMap[i][j + 1] = "X";
        queue.enqueue([i, j + 1]);
        sumValue += curValue;
      }
    }

    return sumValue;
  }

  for (let i = 0; i < yLength; i++) {
    for (let j = 0; j < xLength; j++) {
      if (islandMap[i][j] !== "X") {
        const curValue = parseInt(islandMap[i][j]);
        islandMap[i][j] = "X";
        const sumValue = bfs(i, j, curValue);
        answer.push(sumValue);
      }
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

/**
 * bfs로 한 섬에서 가능한 일자를 계산
 * 모든 섬을 방문할때까지 반복
 */
