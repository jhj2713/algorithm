function solution(user_id, banned_id) {
  let answer = 0;
  const banLength = banned_id.length;
  const matchArr = new Array(banLength);

  // 불량 사용자에 매칭되는 user id 찾기
  banned_id.forEach((ban, idx) => {
    user_id.forEach((user) => {
      const regex = new RegExp(`^${ban.replace(/\*/g, ".")}$`);

      if (user.match(regex)) {
        matchArr[idx] = [...(matchArr[idx] ?? []), user];
      }
    });
  });

  // 매칭되는 user id에 따라 가능한 조합 확인
  const resultArr = [];
  dfs(0, []);

  function dfs(idx, selected) {
    if (idx === banLength) {
      // 나열된 순서와 상관없이 내용이 동일하면 같은 것으로 처리되기 때문에 정렬 후 저장해서 같은 것이 들어오지 않도록 확인
      const sortedSelected = JSON.stringify(selected.sort());
      if (resultArr.includes(sortedSelected)) {
        return;
      }

      answer += 1;
      resultArr.push(sortedSelected);
      return;
    }

    for (let i = 0; i < matchArr[idx].length; i++) {
      const curMatch = matchArr[idx][i];
      if (!selected.includes(curMatch)) {
        dfs(idx + 1, [...selected, curMatch]);
      }
    }
  }

  return answer;
}
