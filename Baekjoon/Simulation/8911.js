const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cases = input.slice(1).map((inp) => inp.split(""));
const answer = [];

const directionMap = {
  TF: [1, 0],
  LF: [0, -1],
  BF: [-1, 0],
  RF: [0, 1],
  TB: [-1, 0],
  LB: [0, 1],
  BB: [1, 0],
  RB: [0, -1],
};
const arrowMap = ["T", "R", "B", "L"];

cases.forEach((directions) => {
  let minX = 0,
    minY = 0,
    maxX = 0,
    maxY = 0;
  let currentX = 0,
    currentY = 0,
    currentArrowIdx = 0;

  directions.forEach((direction) => {
    if (direction === "F" || direction === "B") {
      const [diffY, diffX] = directionMap[`${arrowMap[currentArrowIdx]}${direction}`];
      currentX += diffX;
      currentY += diffY;

      minX = Math.min(minX, currentX);
      minY = Math.min(minY, currentY);
      maxX = Math.max(maxX, currentX);
      maxY = Math.max(maxY, currentY);
    } else {
      if (direction === "R") {
        currentArrowIdx = (currentArrowIdx + 1) % 4;
      } else {
        currentArrowIdx = (currentArrowIdx + 3) % 4;
      }
    }
  });

  const dim = (maxX - minX) * (maxY - minY);
  answer.push(dim);
});

console.log(answer.join("\n"));
