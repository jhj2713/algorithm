const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);

const robots = new Array(n).fill(0);

let answer = 0;

let left = 0,
  right = n - 1; // left는 로봇을 올리는 위치, right는 로봇을 내리는 위치
while (true) {
  answer += 1;

  // 1. 벨트가 각 칸 위에 있는 로봇과 함께 한 칸 회전한다.
  left = getPosition(left - 1);
  right = getPosition(right - 1);

  robots.pop();
  robots.splice(0, 0, 0);

  if (robots[n - 1]) {
    // 내리는 위치에 있는 로봇은 즉시 내림
    robots[n - 1] = 0;
  }

  // 2. 가장 먼저 벨트에 올라간 로봇부터, 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동한다. 만약 이동할 수 없다면 가만히 있는다.
  let currentPos = getPosition(right - 1);
  for (let i = n - 2; i >= 0; i--) {
    if (!robots[i]) {
      currentPos = getPosition(currentPos - 1);
      continue;
    }

    if (!robots[i + 1] && a[getPosition(currentPos + 1)] >= 1) {
      // 로봇이 다음 칸으로 이동하기 위해서는 이동하려는 칸에 로봇이 없으며, 그 칸의 내구도가 1 이상 남아 있어야 한다.
      robots[i] = 0;
      robots[i + 1] = 1;
      a[getPosition(currentPos + 1)] -= 1;
    }

    currentPos = getPosition(currentPos - 1);
  }
  if (robots[n - 1]) {
    // 내리는 위치에 있는 로봇은 즉시 내림
    robots[n - 1] = 0;
  }

  // 3. 올리는 위치에 있는 칸의 내구도가 0이 아니면 올리는 위치에 로봇을 올린다.
  if (a[left] !== 0) {
    robots[0] = 1;
    a[left] -= 1;
  }

  // 4. 내구도가 0인 칸의 개수가 K개 이상이라면 과정을 종료한다. 그렇지 않다면 1번으로 돌아간다.
  const zeroCount = a.filter((val) => val === 0).length;
  if (zeroCount >= k) {
    break;
  }
}

console.log(answer);

function getPosition(x) {
  return x < 0 ? 2 * n - 1 : x === 2 * n ? 0 : x;
}
