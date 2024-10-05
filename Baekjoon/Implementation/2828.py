import sys

input = sys.stdin.readline

n, m = map(int, input().split())
j = int(input())
apples = []
for _ in range(j):
  apples.append(int(input()))

left, right = 0, m-1

answer = 0
for apple in apples:
  position = apple-1
  if position < left:
    answer += (left - position)
    left = position
    right = position + m - 1
  elif position > right:
    answer += (position - right)
    right = position
    left = position - m + 1

print(answer)
