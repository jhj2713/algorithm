function solution(rows, columns, queries) {
  var answer = [];
  const map = Array.from(Array(rows), () => new Array(columns));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      map[i][j] = i * columns + j + 1;
    }
  }

  queries.forEach(([_x1, _y1, _x2, _y2]) => {
    const x1 = _x1 - 1;
    const y1 = _y1 - 1;
    const x2 = _x2 - 1;
    const y2 = _y2 - 1;

    let prevNum = map[x1][y1],
      num = 0;
    let min = prevNum;
    for (let i = y1 + 1; i <= y2; i++) {
      num = map[x1][i];
      map[x1][i] = prevNum;
      prevNum = num;
      min = Math.min(min, num);
    }
    for (let i = x1 + 1; i <= x2; i++) {
      num = map[i][y2];
      map[i][y2] = prevNum;
      prevNum = num;
      min = Math.min(min, num);
    }

    for (let i = y2 - 1; i >= y1; i--) {
      num = map[x2][i];
      map[x2][i] = prevNum;
      prevNum = num;
      min = Math.min(min, num);
    }
    for (let i = x2 - 1; i >= x1; i--) {
      num = map[i][y1];
      map[i][y1] = prevNum;
      prevNum = num;
      min = Math.min(min, num);
    }

    answer.push(min);
  });

  return answer;
}
