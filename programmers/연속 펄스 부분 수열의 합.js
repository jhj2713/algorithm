function solution(sequence) {
  const n = sequence.length;
  const firstSum = new Array(n).fill(0);
  const secondSum = new Array(n).fill(0);

  // [-1, 1, ...]을 사용했을때 누적합
  firstSum[0] = sequence[0] * -1;
  // [1, -1, ...]을 사용했을때 누적합
  secondSum[0] = sequence[0];

  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      firstSum[i] = firstSum[i - 1] - sequence[i];
      secondSum[i] = secondSum[i - 1] + sequence[i];
    } else {
      secondSum[i] = secondSum[i - 1] - sequence[i];
      firstSum[i] = firstSum[i - 1] + sequence[i];
    }
  }

  let firstMin = firstSum[0],
    secondMin = secondSum[0];
  let max = Math.max(firstMin, secondMin);
  for (let i = 1; i < n; i++) {
    firstMin = Math.min(firstMin, firstSum[i - 1], 0);
    max = Math.max(max, firstSum[i] - firstMin);

    secondMin = Math.min(secondMin, secondSum[i - 1], 0);
    max = Math.max(max, secondSum[i] - secondMin);
  }

  return max;
}
