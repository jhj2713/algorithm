/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  const sumArr = [...nums];

  for (let i = 1; i < n; i++) {
    sumArr[i] += sumArr[i - 1];
  }

  let maxSum = sumArr[0],
    min = 0;
  for (let i = 0; i < n; i++) {
    maxSum = Math.max(maxSum, sumArr[i] - min);
    min = Math.min(min, sumArr[i], 0);
  }

  return maxSum;
};
