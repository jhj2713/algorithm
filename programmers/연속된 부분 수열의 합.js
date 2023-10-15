function solution(sequence, k) {
  let startIndex = 0,
    endIndex = 0,
    currentMinLength = Infinity;
  let left = 0,
    right = 0,
    sum = sequence[0];

  while (right < sequence.length) {
    if (sum === k && currentMinLength > right - left) {
      currentMinLength = right - left;
      startIndex = left;
      endIndex = right;
    }

    if (sum <= k) {
      right += 1;
      sum += sequence[right];
    } else if (sum > k) {
      sum -= sequence[left];
      left += 1;
    }
  }

  if (sum === k && currentMinLength > right - left) {
    currentMinLength = right - left;
    startIndex = left;
    endIndex = right;
  }

  return [startIndex, endIndex];
}

/* 시간 초과된 답
function solution(sequence, k) {
  let startIndex = 0, endIndex = 0, currentMinLength = Infinity;
  
  sequence.forEach((_, idx) => {
      let sum = 0, tmpIndex = sequence.length - 1, length = 0;
      
      for(let i=idx; i<sequence.length; i++) {
          sum += sequence[i];
          length += 1;
          if (sum >= k) {
              tmpIndex = i;
              break;
          }
      }
      if (sum === k && currentMinLength > length) {
          startIndex = idx;
          endIndex = tmpIndex;
          currentMinLength = length;
      }
  })
  
  return [startIndex, endIndex];
}
*/
