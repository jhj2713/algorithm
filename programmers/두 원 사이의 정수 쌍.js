function solution(r1, r2) {
  let area = 0;
  for (let i = 1; i < r2; i++) {
    const r2Y = Math.sqrt(r2 ** 2 - i ** 2); // r2에서 (i, y)의 y 좌표 찾기
    const r1Y = Math.sqrt(r1 ** 2 - i ** 2); // r1에서 (i, y)의 y 좌표 찾기
    if (isNaN(r1Y)) {
      // i가 r1보다 큰 값인 경우
      area += Math.floor(r2Y);
    } else if (Math.ceil(r2Y) === Math.floor(r1Y)) {
      // r1Y, r2Y가 같은 정수값인 경우
      area += 1;
    } else if (Math.ceil(r2Y) === r2Y || Math.floor(r1Y) === r1Y) {
      // r2Y가 정수값, r1Y가 실수값인 경우 / r2Y가 실수값, r1Y가 정수값인 경우
      area += Math.ceil(r2Y) - Math.floor(r1Y === 0 ? 1 : r1Y); // r1Y가 1인 경우는 제외 (나중에 0좌표 값 추가해주기 때문에)
    } else {
      area += Math.ceil(r2Y) - Math.floor(r1Y) - 1;
    }
  }
  area += r2 - r1 + 1; // 0 좌표에 있는 값 추가

  return area * 4;
}

// y**2 = r**2 - x**2
