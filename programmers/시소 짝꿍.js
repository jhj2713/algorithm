function solution(weights) {
  const weightCount = {};

  weights.forEach((w) => {
    weightCount[w] = (weightCount[w] ?? 0) + 1;
  });

  let answer = 0;
  const ratio = [2 / 3, 2, 3 / 4];
  for (const [weight, count] of Object.entries(weightCount)) {
    answer += Math.floor((weightCount[weight] * (weightCount[weight] - 1)) / 2);
    ratio.forEach((r) => {
      answer += (weightCount[weight * r] ?? 0) * count;
    });
  }

  return answer;
}

// 1, 2/3, 2, 3/4 비율의 값들이 짝을 이룸
