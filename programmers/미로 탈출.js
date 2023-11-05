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
  const mapCoordinates = maps.map((map) => map.split(""));
  let startPosition = [];
  let leverPosition = [];

  const yLength = mapCoordinates.length;
  const xLength = mapCoordinates[0].length;

  for (let i = 0; i < yLength; i++) {
    for (let j = 0; j < xLength; j++) {
      if (mapCoordinates[i][j] === "S") {
        startPosition = [i, j];
      } else if (mapCoordinates[i][j] === "L") {
        leverPosition = [i, j];
      }
    }
  }

  // lever까지 거리 측정
  let leverLength = -1;
  const leverVisited = Array.from(new Array(yLength), () => new Array(xLength).fill(false));
  leverVisited[startPosition[0]][startPosition[1]] = true;
  const leverQueue = new Queue();
  leverQueue.enqueue([...startPosition, 0]);
  while (!leverQueue.isEmpty()) {
    const [y, x, val] = leverQueue.dequeue();
    if (mapCoordinates[y][x] === "L") {
      // 레버 위치를 찾은 경우
      leverLength = val;
      break;
    }
    if (y !== 0 && mapCoordinates[y - 1][x] !== "X" && !leverVisited[y - 1][x]) {
      leverVisited[y - 1][x] = true;
      leverQueue.enqueue([y - 1, x, val + 1]);
    }
    if (x !== 0 && mapCoordinates[y][x - 1] !== "X" && !leverVisited[y][x - 1]) {
      leverVisited[y][x - 1] = true;
      leverQueue.enqueue([y, x - 1, val + 1]);
    }
    if (y !== yLength - 1 && mapCoordinates[y + 1][x] !== "X" && !leverVisited[y + 1][x]) {
      leverVisited[y + 1][x] = true;
      leverQueue.enqueue([y + 1, x, val + 1]);
    }
    if (x !== xLength - 1 && mapCoordinates[y][x + 1] !== "X" && !leverVisited[y][x + 1]) {
      leverVisited[y][x + 1] = true;
      leverQueue.enqueue([y, x + 1, val + 1]);
    }
  }

  if (leverLength === -1) {
    return -1;
  }

  // 출구까지 거리 측정
  let exitLength = -1;
  const exitVisited = Array.from(new Array(yLength), () => new Array(xLength).fill(false));
  exitVisited[leverPosition[0]][leverPosition[1]] = true;
  const exitQueue = new Queue();
  exitQueue.enqueue([...leverPosition, 0]);
  while (!exitQueue.isEmpty()) {
    const [y, x, val] = exitQueue.dequeue();
    if (mapCoordinates[y][x] === "E") {
      // 출구 위치를 찾은 경우
      exitLength = val;
      break;
    }
    if (y !== 0 && mapCoordinates[y - 1][x] !== "X" && !exitVisited[y - 1][x]) {
      exitVisited[y - 1][x] = true;
      exitQueue.enqueue([y - 1, x, val + 1]);
    }
    if (x !== 0 && mapCoordinates[y][x - 1] !== "X" && !exitVisited[y][x - 1]) {
      exitVisited[y][x - 1] = true;
      exitQueue.enqueue([y, x - 1, val + 1]);
    }
    if (y !== yLength - 1 && mapCoordinates[y + 1][x] !== "X" && !exitVisited[y + 1][x]) {
      exitVisited[y + 1][x] = true;
      exitQueue.enqueue([y + 1, x, val + 1]);
    }
    if (x !== xLength - 1 && mapCoordinates[y][x + 1] !== "X" && !exitVisited[y][x + 1]) {
      exitVisited[y][x + 1] = true;
      exitQueue.enqueue([y, x + 1, val + 1]);
    }
  }

  if (exitLength === -1) {
    return -1;
  }

  return leverLength + exitLength;
}

/**
 * 레버까지 최단경로 + 출구까지 최단경로
 * bfs로 탐색하면서 현재까지 거리에서 ++
 */
