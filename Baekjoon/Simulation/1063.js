const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [king, stone, n] = input[0].split(" ");
let kingX = king[0].charCodeAt() - "A".charCodeAt();
let kingY = Number(king[1]) - 1;
let stoneX = stone[0].charCodeAt() - "A".charCodeAt();
let stoneY = Number(stone[1]) - 1;

const directions = input.slice(1);

const directionDict = {
  R: [0, 1],
  L: [0, -1],
  B: [-1, 0],
  T: [1, 0],
  RT: [1, 1],
  LT: [1, -1],
  RB: [-1, 1],
  LB: [-1, -1],
};

directions.forEach((dir) => {
  const [yDiff, xDiff] = directionDict[dir];

  const newKingX = kingX + xDiff;
  const newKingY = kingY + yDiff;
  const newStoneX = stoneX + xDiff;
  const newStoneY = stoneY + yDiff;

  if (!isRightCoordinates(newKingX, newKingY)) {
    return;
  }

  if (newKingX === stoneX && newKingY === stoneY) {
    if (!isRightCoordinates(newStoneX, newStoneY)) {
      return;
    }

    stoneX = newStoneX;
    stoneY = newStoneY;
  }
  kingX = newKingX;
  kingY = newKingY;
});

function isRightCoordinates(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

console.log(`${String.fromCharCode(kingX + 65)}${kingY + 1}`);
console.log(`${String.fromCharCode(stoneX + 65)}${stoneY + 1}`);
