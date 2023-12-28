function solution(x, y, n) {
  const calc = new Array(y * 3).fill(Infinity); // index 값을 만들기 위해서 필요한 연산 횟수를 저장
  calc[x] = 0;

  for (let i = x; i <= y; i++) {
    const count = calc[i] + 1;
    calc[i + n] = Math.min(calc[i + n], count);
    calc[i * 2] = Math.min(calc[i * 2], count);
    calc[i * 3] = Math.min(calc[i * 3], count);
  }

  return calc[y] === Infinity ? -1 : calc[y];
}
