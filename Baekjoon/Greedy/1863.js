const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const coordinateArr = input.slice(1).map((inp) => inp.split(" ").map(Number));
let buildingStack = [];

let result = 0;

coordinateArr.forEach((coor) => {
  while (buildingStack.length !== 0) {
    const curBuilding = buildingStack.pop();
    if (curBuilding > coor[1]) result++;
    else {
      if (curBuilding < coor[1]) buildingStack.push(curBuilding);
      break;
    }
  }

  if (coor[1] !== 0) buildingStack.push(coor[1]);
});

while (buildingStack.length !== 0) {
  buildingStack.pop();
  result++;
}

console.log(result);
