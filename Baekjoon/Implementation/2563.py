import sys

input = sys.stdin.readline
n = int(input())
paper_positions = []

for _ in range(n):
  paper_positions.append(list(map(int, input().split())))

paper_map = [[False for _ in range(100)] for _ in range(100)]

for [x, y] in paper_positions:
  for i in range(y, y+10):
    for j in range(x, x+10):
      paper_map[i][j] = True

answer = 0
for i in range(100):
  for j in range(100):
    if paper_map[i][j]:
      answer += 1

print(answer)