import sys

input = sys.stdin.readline

n, m = map(int, input().split())
treasure_map = [input().strip() for _ in range(n)]  # strip()으로 줄 끝 공백 제거

# 특정 지점에서부터 bfs로 다른 점까지의 최단 경로를 기록
INF = 999999999
coordinates = [[0, 1], [0, -1], [1, 0], [-1, 0]]
answer = 0
for i in range(n):
  for j in range(m):
    if treasure_map[i][j] == 'L':
      # 최단 경로 구하기
      q = [(i, j, 0)]
      visited = [[False for _ in range(m)] for _ in range(n)]
      visited[i][j] = True
      while q:
        current_i, current_j, val = q.pop(0)
        for [di, dj] in coordinates:
          new_i = current_i + di
          new_j = current_j + dj
          if new_i >= 0 and new_i < n and new_j >= 0 and new_j < m and treasure_map[new_i][new_j] == 'L' and not visited[new_i][new_j]:
            visited[new_i][new_j] = True
            q.append((new_i, new_j, val + 1))
            answer = max(answer, val + 1)

print(answer)