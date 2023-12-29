// dfs - 시간초과
function solution(k, tangerine) {
  let minCategory = Infinity;

  const removeCount = tangerine.length - k;

  function dfs(idx, count, removeTangerine) {
    if (count === removeCount) {
      // 귤의 개수가 k개가 된 경우
      const newTangerine = tangerine.filter((_, i) => !removeTangerine.includes(i));
      minCategory = Math.min(getCategoryCount(newTangerine), minCategory);
      return;
    }
    if (idx === tangerine.length) {
      return;
    }

    dfs(idx + 1, count, [...removeTangerine]);
    dfs(idx + 1, count + 1, [...removeTangerine, idx]);
  }

  function getCategoryCount(newTangerine) {
    return [...new Set(newTangerine)].length;
  }

  dfs(0, 0, []);

  return minCategory;
}

// dict - 성공
function solution(k, tangerine) {
  const tangerineDict = {};
  let removeCount = tangerine.length - k;

  tangerine.forEach((t) => {
    tangerineDict[t] = (tangerineDict[t] ?? 0) + 1;
  });

  const sortedTangerineEntries = Object.entries(tangerineDict).sort((a, b) => a[1] - b[1]);

  // 개수가 작은 귤부터 빼서 종류 줄이기
  for (const [key, value] of sortedTangerineEntries) {
    if (removeCount >= value) {
      removeCount -= value;
      tangerineDict[key] = 0;
    } else {
      // removeCount <= value
      tangerineDict[key] -= removeCount;
      removeCount = 0;
      break;
    }
  }

  let answer = 0;
  Object.entries(tangerineDict).forEach(([, value]) => {
    if (value !== 0) {
      answer += 1;
    }
  });

  return answer;
}
