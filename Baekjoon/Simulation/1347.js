const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const directions = input[1].split("");

const directionMap = {
  TF: [-1, 0],
  LF: [0, -1],
  BF: [1, 0],
  RF: [0, 1],
  TB: [1, 0],
  LB: [0, 1],
  BB: [-1, 0],
  RB: [0, -1],
};
const arrowMap = ["T", "R", "B", "L"];

let currentX = 0,
  currentY = 0,
  currentArrowIdx = 2;
let minX = 0,
  maxX = 0,
  minY = 0,
  maxY = 0;
const coordinates = [[0, 0]];

directions.forEach((direction) => {
  if (direction === "F" || direction === "B") {
    const [diffY, diffX] = directionMap[`${arrowMap[currentArrowIdx]}${direction}`];
    currentX += diffX;
    currentY += diffY;

    minX = Math.min(minX, currentX);
    minY = Math.min(minY, currentY);
    maxX = Math.max(maxX, currentX);
    maxY = Math.max(maxY, currentY);

    coordinates.push([currentY, currentX]);
  } else {
    if (direction === "R") {
      currentArrowIdx = (currentArrowIdx + 1) % 4;
    } else {
      currentArrowIdx = (currentArrowIdx + 3) % 4;
    }
  }
});

const yLength = maxY - minY,
  xLength = maxX - minX;
const mapArr = Array.from(Array(yLength + 1), () => new Array(xLength + 1).fill("#"));

coordinates.forEach(([y, x]) => {
  const mapY = y - minY,
    mapX = x - minX;

  mapArr[mapY][mapX] = ".";
});

console.log(mapArr.map((arr) => arr.join("")).join("\n"));
