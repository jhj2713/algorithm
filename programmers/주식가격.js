function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [];
  stack.push([0, prices[0]]);

  for (let i = 1; i < n; i++) {
    while (true) {
      const peekValue = stack.at(-1);
      if (stack.length === 0 || peekValue[1] <= prices[i]) {
        stack.push([i, prices[i]]);
        break;
      }

      const [idx, _popValue] = stack.pop();
      answer[idx] = i - idx;
    }
  }

  stack.forEach(([idx, _val]) => {
    answer[idx] = n - 1 - idx;
  });

  return answer;
}
