import sys

input = sys.stdin.readline

n, m = map(int, input().split())
campus_map = []

for _ in range(n):
  campus_map.append(input().strip())

coordinates = [[0, 1], [0, -1], [1, 0], [-1, 0]]
visited = [[False for _ in range(m)] for _ in range(n)]
q = []
for i in range(n):
  for j in range(m):
    if campus_map[i][j] == 'I':
      q.append((i, j))
      visited[i][j] = True
      break
  if q:
    break

answer = 0
while q:
  i, j = q.pop(0)
  for [di, dj] in coordinates:
    new_i = i + di
    new_j = j + dj
    if new_i >= 0 and new_i < n and new_j >= 0 and new_j < m and campus_map[new_i][new_j] != 'X' and not visited[new_i][new_j]:
      q.append((new_i, new_j))
      visited[new_i][new_j] = True
      if campus_map[new_i][new_j] == 'P':
        answer += 1

if answer == 0:
  answer = 'TT'
print(answer)