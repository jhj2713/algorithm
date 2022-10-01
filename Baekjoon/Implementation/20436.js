const [sl, sr] = "z o".split(" ");
const input = "zoac";

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

function process() {
  let left = findIndex(sl);
  let right = findIndex(sr);
  let sum = 0;

  input.split("").forEach((str) => {
    const idx = findIndex(str);
    if (idx[1] >= Math.ceil((10 - idx[0]) / 2)) {
      sum += calcLength(right, idx) + 1;
      right = idx;
    } else {
      sum += calcLength(left, idx) + 1;
      left = idx;
    }
  });
  console.log(sum);
}

function findIndex(str) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 10 - i; j++) {
      if (str === keyboard[i][j]) return [i, j];
    }
  }
}

function calcLength(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

process();
