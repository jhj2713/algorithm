const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [h, w] = input[0].split(" ").map(Number);
const cloud = input.slice(1).map((inp) => inp.split(""));

const answer = Array.from(Array(h), () => new Array(w).fill(-1));

// 이미 구름이 있는 곳은 0으로 표시
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (cloud[i][j] === "c") {
      answer[i][j] = 0;
    }
  }
}

for (let i = 0; i < h; i++) {
  for (let j = 0; j < w - 1; j++) {
    if (answer[i][j] !== -1) {
      // 구름이 있는 곳

      if (answer[i][j + 1] === 0) {
        continue;
      }

      answer[i][j + 1] = answer[i][j] + 1;
    }
  }
}

const count = answer.map((answerArr) => answerArr.join(" ")).join("\n");
console.log(count);
