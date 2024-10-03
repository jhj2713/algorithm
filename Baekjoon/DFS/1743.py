import sys

input = sys.stdin.readline

n, m, k = map(int, input().split())
foods_map = [[False for _ in range(m)] for _ in range(n)]

for _ in range(k):
  r, c = map(int, input().split())
  foods_map[r-1][c-1] = True

answer = 0
for i in range(n):
  for j in range(m):
    if foods_map[i][j]:
      visited = [[False for _ in range(m)] for _ in range(n)]
      visited[i][j] = True
      coordinates = [[0, 1], [0, -1], [1, 0], [-1, 0]]
      current_cnt = 0
      q = [(i, j)]
      while q:
        current_i, current_j = q.pop(0)
        current_cnt += 1
        for [di, dj] in coordinates:
          new_i = current_i + di
          new_j = current_j + dj
          if new_i >= 0 and new_i < n and new_j >= 0 and new_j < m and foods_map[new_i][new_j] and not visited[new_i][new_j]:
            visited[new_i][new_j] = True
            q.append((new_i, new_j))

      answer = max(answer, current_cnt)

print(answer)