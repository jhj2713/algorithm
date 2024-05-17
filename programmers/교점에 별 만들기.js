function solution(line) {
  const n = line.length;
  const integerIntersections = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      if (a * d === b * c) {
        // 직선이 평행하거나 만나지 않는 경우
        continue;
      }

      const x = (b * f - e * d) / (a * d - b * c);
      const y = (e * c - a * f) / (a * d - b * c);

      if (isInteger(x) && isInteger(y)) {
        integerIntersections.push([x, y]);
      }
    }
  }

  const minX = Math.min(...integerIntersections.map((i) => i[0]));
  const maxX = Math.max(...integerIntersections.map((i) => i[0]));
  const minY = Math.min(...integerIntersections.map((i) => i[1]));
  const maxY = Math.max(...integerIntersections.map((i) => i[1]));

  const row = maxX - minX + 1,
    col = maxY - minY + 1;
  const stars = Array.from(Array(col), () => new Array(row).fill("."));
  integerIntersections.forEach(([x, y]) => {
    const arrX = x - minX;
    const arrY = -(y - maxY);

    stars[arrY][arrX] = "*";
  });

  return stars.map((star) => star.join(""));
}

function isInteger(n) {
  return n === Math.floor(n);
}
