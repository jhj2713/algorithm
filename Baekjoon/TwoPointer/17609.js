const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.slice(1);

function checkPalindrome(str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

let result = [];
T.forEach((t) => {
  let left = 0,
    right = t.length - 1;
  let isPalindrome = 0;

  while (left < right) {
    if (t[left] !== t[right]) {
      if (t[left + 1] === t[right] && checkPalindrome(t.slice(left + 1, right + 1))) {
        isPalindrome = 1;
        break;
      }
      if (t[right - 1] === t[left] && checkPalindrome(t.slice(left, right))) {
        isPalindrome = 1;
        break;
      }

      isPalindrome = 2;
      break;
    } else {
      left++;
      right--;
    }
  }

  result.push(isPalindrome);
});

console.log(result.join("\n"));
