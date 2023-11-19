function solution(m, n, board) {
  let answer = 0;
  let boardArr = board.map((b) => b.split(""));

  while (true) {
    const matchArr = boardArr.map((b) => b.map(() => false));
    let isEnd = true;

    // 현재 턴에서 4개가 붙어있는 경우 찾기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (isMatchArr(i, j)) {
          matchArr[i][j] = true;
          matchArr[i + 1][j] = true;
          matchArr[i][j + 1] = true;
          matchArr[i + 1][j + 1] = true;

          isEnd = false;
        }
      }
    }

    if (isEnd) {
      // 붙어있는 블록이 없는 경우 끝남
      break;
    }

    boardArr = boardArr.map((board, i) =>
      board.map((b, j) => {
        if (matchArr[i][j]) {
          answer += 1;
          return "X";
        }
        return b;
      })
    );

    for (let j = 0; j < n; j++) {
      // 비어있는 칸 채우기
      fillBlock(j);
    }
  }

  function fillBlock(num) {
    for (let i = m - 1; i >= 0; i--) {
      // 현재 블록이 비어있는 경우 현재 블록과 가장 가까운 위에 있고 비어있지 않은 블록을 가져오기
      if (boardArr[i][num] === "X") {
        for (let k = i - 1; k >= 0; k--) {
          if (boardArr[k][num] !== "X") {
            boardArr[i][num] = boardArr[k][num];
            boardArr[k][num] = "X";
            break;
          }
        }
      }
    }
  }

  function isMatchArr(i, j) {
    const block = boardArr[i][j];
    if (block === "X") {
      return false;
    }

    if (boardArr[i][j + 1] === block && boardArr[i + 1][j] === block && boardArr[i + 1][j + 1] === block) {
      return true;
    }
    return false;
  }

  return answer;
}
