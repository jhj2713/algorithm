import sys

input = sys.stdin.readline

n = int(input())
room = []

for _ in range(n):
  room.append(input().strip())

row_visited = [[False for _ in range(n)] for _ in range(n)]
col_visited = [[False for _ in range(n)] for _ in range(n)]

def find_space(i, j):
  # 열 확인
  col = 0
  cnt = 1
  for tmp_i in range(i + 1, n):
    if room[tmp_i][j] == '.' and not col_visited[tmp_i][j]:
      cnt += 1
      col_visited[tmp_i][j] = True
    else:
      break
  if cnt >= 2:
    col += 1
    col_visited[i][j] = True

  # 행 확인
  row = 0
  cnt = 1
  for tmp_j in range(j + 1, n):
    if room[i][tmp_j] == '.' and not row_visited[i][tmp_j]:
      cnt += 1
      row_visited[i][tmp_j] = True
    else:
      break
  if cnt >= 2:
    row += 1
    row_visited[i][j] = True

  return row, col

row = 0
col = 0
for i in range(n):
  for j in range(n):
    if (not row_visited[i][j] or not col_visited[i][j]) and room[i][j] == '.':
      new_row, new_col = find_space(i, j)
      row += new_row
      col += new_col

print(row, col)