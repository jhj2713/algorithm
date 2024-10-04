import sys

input = sys.stdin.readline
rectangles = []

for _ in range(4):
  rectangles.append(map(int, input().split()))

visited = [[False for _ in range(101)] for _ in range(101)]

for (x1, y1, x2, y2) in rectangles:
  for i in range(y1, y2):
    for j in range(x1, x2):
      visited[i][j] = True

answer = 0
for i in range(101):
  for j in range(101):
    if visited[i][j]:
      answer += 1

print(answer)