/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let num1Count = 0,
    num2Count = 0;
  nums1.splice(m, n);

  for (let i = 0; i < n + m; i++) {
    if (num1Count === m) {
      nums1.push(nums2[num2Count++]);
      continue;
    }
    if (num2Count === n) {
      break;
    }

    if (nums1[i] <= nums2[num2Count]) {
      num1Count += 1;
    } else {
      nums1.splice(i, 0, nums2[num2Count++]);
    }
  }

  return nums1;
};
