function solution(str1, str2) {
  const str1MultipleSet = getMultipleSet(str1.split(""));
  const str2MultipleSet = getMultipleSet(str2.split(""));

  const union = [];
  const unionSet = new Set([...str1MultipleSet, ...str2MultipleSet]);
  unionSet.forEach((str) => {
    // str1에 있는 개수와 str2에 있는 개수 중 더 큰 값이 합집합의 원소 개수가 됨
    const count = Math.max(str1MultipleSet.filter((s) => s === str).length, str2MultipleSet.filter((s) => s === str).length);
    union.push(...new Array(count).fill(str));
  });

  const intersection = [];
  new Set(str1MultipleSet).forEach((str) => {
    if (!str2MultipleSet.includes(str)) {
      return;
    }
    // str1에 있는 개수와 str2에 있는 개수 중 더 작은 값이 교집합의 원소 개수가 됨
    const count = Math.min(str1MultipleSet.filter((s) => s === str).length, str2MultipleSet.filter((s) => s === str).length);
    intersection.push(...new Array(count).fill(str));
  });

  const unionSize = union.length;
  const intersectionSize = intersection.length;

  return unionSize === 0 && intersectionSize === 0 ? 65536 : Math.floor((intersectionSize / unionSize) * 65536);
}

function getMultipleSet(array) {
  const multipleSet = array.reduce((acc, val, idx) => {
    if (idx === 0) {
      return acc;
    }

    // 2개씩 자르기
    return [...acc, array[idx - 1] + val];
  }, []);

  // 2개씩 다른 단어 중 알파벳 두자리인 경우만 필터링 -> 대소문자 구분 없이
  return multipleSet.filter((str) => str.match(/[a-zA-Z]{2}/)).map((str) => str.toLowerCase());
}
