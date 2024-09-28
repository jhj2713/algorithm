const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C, N] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function initState(board) {
  const newBoard = board.map((row) => [...row]);
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] === "O") {
        newBoard[i][j] = "X"; // 폭발될 폭탄
        directions.forEach(([dx, dy]) => {
          const newI = i + dx,
            newJ = j + dy;
          if (newI >= 0 && newI < R && newJ >= 0 && newJ < C) {
            newBoard[newI][newJ] = "X";
          }
        });
      }
    }
  }
  return newBoard.map((row) => row.map((cell) => (cell === "X" ? "." : "O")));
}

if (N === 1) {
  // 1초 후엔 변화 없음
  console.log(board.map((row) => row.join("")).join("\n"));
} else if (N % 2 === 0) {
  // 짝수 초에는 모든 칸이 폭탄으로 가득 참
  const newBoard = Array.from(Array(R), () => Array(C).fill("O"));
  console.log(newBoard.map((row) => row.join("")).join("\n"));
} else {
  const thirdSecState = initState(board);
  if (N % 4 === 3) {
    // 3, 7, 11, ...초 일 때 상태
    console.log(thirdSecState.map((row) => row.join("")).join("\n"));
  } else {
    // 5, 9, 13, ...초 일 때 상태
    console.log(
      initState(thirdSecState)
        .map((row) => row.join(""))
        .join("\n")
    );
  }
}
