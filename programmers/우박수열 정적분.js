function solution(k, ranges) {
  const dots = [[0, k]];
  const areas = [];
  let step = 0;

  while (k !== 1) {
    if (k % 2 === 0) {
      // 짝수이면
      k /= 2;
    } else {
      // 홀수이면
      k *= 3;
      k += 1;
    }

    dots.push([++step, k]);

    const maxY = Math.max(dots[step - 1][1], dots[step][1]);
    const minY = Math.min(dots[step - 1][1], dots[step][1]);
    const triangle = (maxY - minY) / 2;
    const rect = minY;

    areas.push(triangle + rect);
  }

  const answer = [];
  ranges.forEach(([a, _b]) => {
    if (a === 0 && _b === 0) {
      // 전 구역
      answer.push(areas.reduce((acc, val) => acc + val, 0));
    } else {
      const b = step + _b;

      if (a > b) {
        answer.push(-1);
      } else if (a === b) {
        answer.push(0);
      } else {
        answer.push(areas.slice(a, b).reduce((acc, val) => acc + val, 0));
      }
    }
  });

  return answer;
}
