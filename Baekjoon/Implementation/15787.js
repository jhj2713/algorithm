const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const command = input.slice(1);

const train = Array.from(Array(n), () => Array(20).fill(0));

command.forEach((com) => {
  const type = com.split(" ").map(Number);

  if (type[0] === 1) {
    train[type[1] - 1][type[2] - 1] = 1;
  } else if (type[0] === 2) {
    train[type[1] - 1][type[2] - 1] = 0;
  } else if (type[0] === 3) {
    train[type[1] - 1] = [0, ...train[type[1] - 1].slice(0, 19)];
  } else {
    train[type[1] - 1] = [...train[type[1] - 1].slice(1), 0];
  }
});

const result = [];

train.forEach((t) => {
  if (!result.includes(JSON.stringify(t))) {
    result.push(JSON.stringify(t));
  }
});

console.log(result.length);
