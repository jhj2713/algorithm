function solution(arrayA, arrayB) {
  const aAnswer = getDivisor(arrayA, arrayB);
  const bAnswer = getDivisor(arrayB, arrayA);

  return Math.max(aAnswer, bAnswer);
}

function getDivisor(divisor, nonDivisor) {
  const max = divisor.sort((a, b) => a - b)[0];
  for (let i = max; i >= 2; i--) {
    if (divisor.every((d) => d % i === 0) && nonDivisor.every((n) => n % i !== 0)) {
      return i;
    }
  }

  return 0;
}
