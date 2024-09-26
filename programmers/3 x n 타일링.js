function solution(n) {
  const dp = new Array(n + 1).fill(0);
  let totalSum = 0;
  dp[2] = 3;
  dp[4] = 11;
  totalSum += 3;

  // f(n) = f(n - 2) * 3 + f(n - 4) * 2 + f(n - 6) * 2 + ... + 2;
  for (let i = 6; i <= n; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    const sum = dp[i - 2] * 3 + totalSum * 2 + 2;
    dp[i] = sum % 1000000007;
    totalSum += dp[i - 2];
  }

  return dp[n];
}
