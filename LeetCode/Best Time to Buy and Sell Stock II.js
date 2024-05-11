/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  let prevMin = prices[0];
  let answer = 0;

  for (let i = 1; i < n - 1; i++) {
    if (prices[i] > prices[i + 1]) {
      // 꼭짓점에서 내 앞에 있던 최소값을 기반으로 profit 구함
      if (prices[i] > prevMin) {
        answer += prices[i] - prevMin;
        prevMin = prices[i];
      }
    }
    prevMin = Math.min(prices[i], prevMin);
  }

  if (prices[n - 1] > prevMin) {
    answer += prices[n - 1] - prevMin;
  }

  return answer;
};
