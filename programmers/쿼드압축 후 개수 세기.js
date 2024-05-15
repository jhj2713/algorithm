function solution(arr) {
  const answer = [0, 0];
  const n = arr.length;

  function dfs(row, col, size) {
    let isEqual = true;
    const num = arr[row][col];

    for (let i = row; i < row + size; i++) {
      for (let j = col; j < col + size; j++) {
        if (arr[i][j] !== num) {
          isEqual = false;
          break;
        }
      }
      if (!isEqual) {
        break;
      }
    }

    if (isEqual) {
      answer[num] += 1;
      return;
    }

    const divSize = size / 2;
    dfs(row, col, divSize);
    dfs(row + divSize, col, divSize);
    dfs(row, col + divSize, divSize);
    dfs(row + divSize, col + divSize, divSize);
  }

  dfs(0, 0, n);

  return answer;
}
