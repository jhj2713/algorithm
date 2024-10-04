import sys

input = sys.stdin.readline

n, m = map(int, input().split())
rectangles = []

for _ in range(n):
  rectangles.append(list(map(int, list(input().strip()))))

max_length = 0
for i in range(n):
  for j in range(m):
    for l in range(1, min(n, m)+1):
      # i, j를 왼쪽 위 꼭짓점으로 하고 한 변의 길이가 l인 정사각형
      if i + l > n or j + l > m:
        continue
      is_rectangle = True
      val = rectangles[i][j]
      di = i+l-1
      dj = j+l-1
      if rectangles[i][dj] == val and rectangles[di][j] == val and rectangles[di][dj] == val:
        max_length = max(max_length, l)
  
print(max_length ** 2)