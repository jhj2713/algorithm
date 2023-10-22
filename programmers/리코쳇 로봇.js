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

function solution(board) {
  let initialPosition = [0, 0];
  const boardGrid = board.map((row) => row.split(""));
  const visited = Array.from(Array(boardGrid.length), () => new Array(boardGrid[0].length).fill(false));

  for (let i = 0; i < boardGrid.length; i++) {
    for (let j = 0; j < boardGrid[0].length; j++) {
      if (boardGrid[i][j] === "R") {
        // 처음 로봇 위치이면
        initialPosition = [i, j];
        visited[i][j] = true;
        break;
      }
    }
  }

  let answer = Infinity;
  const queue = new Queue();
  queue.enqueue([initialPosition[0], initialPosition[1], 1]);

  while (!queue.isEmpty()) {
    const [x, y, value] = queue.dequeue();

    // 왼쪽으로 움직인 경우
    if (y !== 0) {
      let leftY = 0;
      for (let j = y - 1; j >= 0; j--) {
        if (boardGrid[x][j] === "D") {
          leftY = j + 1;
          break;
        }
      }
      if (boardGrid[x][leftY] === "G") {
        answer = Math.min(answer, value);
        visited[x][leftY] = true;
      }
      if (!visited[x][leftY]) {
        visited[x][leftY] = true;
        queue.enqueue([x, leftY, value + 1]);
      }
    }
    // 오른쪽으로 움직인 경우
    if (y !== boardGrid[0].length - 1) {
      let rightY = boardGrid[0].length - 1;
      for (let j = y + 1; j < boardGrid[0].length; j++) {
        if (boardGrid[x][j] === "D") {
          rightY = j - 1;
          break;
        }
      }
      if (boardGrid[x][rightY] === "G") {
        answer = Math.min(answer, value);
        visited[x][rightY] = true;
      }
      if (!visited[x][rightY]) {
        visited[x][rightY] = true;
        queue.enqueue([x, rightY, value + 1]);
      }
    }
    // 위쪽으로 움직인 경우
    if (x !== 0) {
      let upX = 0;
      for (let i = x - 1; i >= 0; i--) {
        if (boardGrid[i][y] === "D") {
          upX = i + 1;
          break;
        }
      }
      if (boardGrid[upX][y] === "G") {
        answer = Math.min(answer, value);
        visited[upX][y] = true;
      }
      if (!visited[upX][y]) {
        visited[upX][y] = true;
        queue.enqueue([upX, y, value + 1]);
      }
    }
    // 아래쪽으로 움직인 경우
    if (x !== boardGrid.length - 1) {
      let downX = boardGrid.length - 1;
      for (let i = x + 1; i < boardGrid.length; i++) {
        if (boardGrid[i][y] === "D") {
          downX = i - 1;
          break;
        }
      }
      if (boardGrid[downX][y] === "G") {
        answer = Math.min(answer, value);
        visited[downX][y] = true;
      }
      if (!visited[downX][y]) {
        visited[downX][y] = true;
        queue.enqueue([downX, y, value + 1]);
      }
    }
  }

  return answer === Infinity ? -1 : answer;
}
