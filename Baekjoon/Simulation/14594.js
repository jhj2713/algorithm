const input = `100
0`.split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
if (m === 0) {
  console.log(n);
} else {
  let destroy = input.slice(2).map((d) => d.split(" ").map(Number));
  destroy = destroy.sort((a, b) => a[0] - b[0]);
  let rooms = Array.from(Array(n).keys());

  destroy.forEach((d) => {
    const [x, y] = d;
    const roomNumber = rooms[x - 1];

    for (let i = x - 1; i < y; i++) {
      rooms[i] = roomNumber;
    }
  });

  console.log(new Set(rooms).size);
}
