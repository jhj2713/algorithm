function solution(word) {
  const add = [781, 156, 31, 6, 1];
  const map = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };

  const wordArr = word.split("");

  let answer = word.length;
  for (let i = 0; i < wordArr.length; i++) {
    answer += add[i] * map[wordArr[i]];
  }

  return answer;
}
