const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...arr] = input;
let answer = 0;

arr.forEach((word) => {
  const splitWord = word.split("");
  let words = {},
    pre = splitWord[0];

  const isNotGroup = splitWord.some((w) => {
    if (pre === w || !words[w]) {
      words[w] = 1;
      pre = w;
      return false;
    }

    return true;
  });

  if (!isNotGroup) answer++;
});

console.log(answer);
