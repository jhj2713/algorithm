const fs = require("fs");
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function process() {
  const extArr = input.map((data) => data.split(".")[1]).sort();
  let extSet = [];
  let pre = extArr[0],
    count = 1;

  for (let i = 1; i < extArr.length; i++) {
    if (pre === extArr[i]) count++;
    else {
      extSet.push({ ext: pre, count });
      pre = extArr[i];
      count = 1;
    }
  }
  extSet.push({ ext: pre, count });

  console.log(extSet.map((ext) => `${ext.ext} ${ext.count}`).join("\n"));
}

process();
