import sys

input = sys.stdin.readline
n, m = map(int, input().split())

numbers = []

for i in range(n):
  line = list(map(int, input().split()))
  numbers.append(line)

answer = ''
k = int(input())
for _ in range(k):
  total_sum = 0
  x1, y1, x2, y2 = map(int, input().split())
  for x in range(x1-1, x2):
    for y in range(y1-1, y2):
      total_sum += numbers[x][y]
  answer += '%d\n' % total_sum

print(answer)