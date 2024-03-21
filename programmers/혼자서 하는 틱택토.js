function solution(board) {
  const boardCoordinate = board.map((b) => b.split(""));

  // 1. O, X의 개수 확인
  // O가 1개 더 많거나 같은 개수이면 가능한 경우
  let oCount = 0,
    xCount = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (boardCoordinate[i][j] === "O") oCount += 1;
      if (boardCoordinate[i][j] === "X") xCount += 1;
    }
  }

  if (xCount > oCount || oCount > xCount + 1) {
    return 0;
  }

  // 2. 선후공이 승리해서 게임이 종료되었는데 게임을 진행한 경우
  // O가 승리한 경우
  const coordinate = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  let isOWin = false;
  for (const coor of coordinate) {
    if (coor.every(([i, j]) => boardCoordinate[i][j] === "O")) {
      // 이긴 경우
      isOWin = true;
      break;
    }
  }
  // O가 승리했는데 게임을 계속 진행해서 O 개수와 X 개수가 같은 경우
  if (isOWin && oCount === xCount) {
    return 0;
  }

  // X가 승리한 경우
  let isXWin = false;
  for (const coor of coordinate) {
    if (coor.every(([i, j]) => boardCoordinate[i][j] === "X")) {
      // 이긴 경우
      isXWin = true;
      break;
    }
  }
  // X가 승리했는데 게임을 계속 진행해서 O 개수와 X 개수보다 많은 경우
  if (isXWin && oCount > xCount) {
    return 0;
  }

  return 1;
}
