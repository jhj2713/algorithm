const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const fieldArr = input.map((field) => field.split(""));

let result = 0;
let queue = [];
let visited = Array.from(Array(12), () => new Array(6).fill(false));

while (true) {
  let isCrash = false;
  for (let i = 11; i >= 0; i--) {
    for (let j = 0; j < 6; j++) {
      if (fieldArr[i][j] !== "." && !visited[i][j]) {
        queue = [[i, j]];
        bfs(i, j, queue, visited);
        if (queue.length >= 4) {
          isCrash = true;
        } else {
          for (let k = 0; k < queue.length; k++) {
            visited[queue[k][0]][queue[k][1]] = false;
          }
        }
      }
    }
  }

  if (!isCrash) break;
  result++;

  for (let i = 11; i >= 0; i--) {
    for (let j = 0; j < 6; j++) {
      if (visited[i][j]) fieldArr[i][j] = ".";
    }
  }

  for (let i = 10; i >= 0; i--) {
    for (let j = 0; j < 6; j++) {
      if (fieldArr[i][j] === ".") continue;

      const tmp = bottomCoordinate(i, j);
      if (tmp !== -1) {
        fieldArr[tmp][j] = fieldArr[i][j];
        fieldArr[i][j] = ".";
      }
    }
  }

  queue = [];
  visited = Array.from(Array(12), () => new Array(6).fill(false));
}

console.log(result);

function bfs(x, y, tmpQueue, visited) {
  let queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length !== 0) {
    const [tmpX, tmpY] = queue.pop();
    if (tmpX !== 0 && !visited[tmpX - 1][tmpY] && fieldArr[tmpX][tmpY] === fieldArr[tmpX - 1][tmpY]) {
      queue.push([tmpX - 1, tmpY]);
      tmpQueue.push([tmpX - 1, tmpY]);
      visited[tmpX - 1][tmpY] = true;
    }
    if (tmpY !== 0 && !visited[tmpX][tmpY - 1] && fieldArr[tmpX][tmpY] === fieldArr[tmpX][tmpY - 1]) {
      queue.push([tmpX, tmpY - 1]);
      tmpQueue.push([tmpX, tmpY - 1]);
      visited[tmpX][tmpY - 1] = true;
    }
    if (tmpX !== 11 && !visited[tmpX + 1][tmpY] && fieldArr[tmpX][tmpY] === fieldArr[tmpX + 1][tmpY]) {
      queue.push([tmpX + 1, tmpY]);
      tmpQueue.push([tmpX + 1, tmpY]);
      visited[tmpX + 1][tmpY] = true;
    }
    if (tmpY !== 5 && !visited[tmpX][tmpY + 1] && fieldArr[tmpX][tmpY] === fieldArr[tmpX][tmpY + 1]) {
      queue.push([tmpX, tmpY + 1]);
      tmpQueue.push([tmpX, tmpY + 1]);
      visited[tmpX][tmpY + 1] = true;
    }
  }
}

function bottomCoordinate(x, y) {
  let tmp = -1;
  for (let i = x; i < 12; i++) {
    if (fieldArr[i][y] === ".") tmp = i;
  }

  return tmp;
}
