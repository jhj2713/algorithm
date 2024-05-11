/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  const rotation = k % n;
  const remain = nums.splice(0, n - rotation);
  nums.push(...remain);
};
