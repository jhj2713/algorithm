const input = `4 5 10
2 4 6 8`.split("\n");

const [n, m, l] = input[0].split(" ").map(Number);
let position = input[1].split(" ").map(Number);
position.push(0, l);
position = position.sort((a, b) => a - b);

console.log(Math.floor(0 / 4));

let left = 1,
  right = l,
  result = l;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 0;

  for (let i = 1; i < position.length; i++) {
    count += Math.floor((position[i] - position[i - 1] - 1) / mid);
  }

  if (count > m) {
    left = mid + 1;
  } else {
    result = Math.min(result, mid);
    right = mid - 1;
  }
}

console.log(result);
