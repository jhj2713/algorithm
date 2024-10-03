import sys

input = sys.stdin.readline

n, s = map(int, input().split())
numbers = list(map(int, input().split()))

answer = 0
def tracking(idx, cnt, sum):
  global answer

  if idx == n:
    if sum == s and cnt >= 1:
      answer += 1
    return
  
  tracking(idx + 1, cnt, sum)
  tracking(idx + 1, cnt + 1, sum + numbers[idx])

tracking(0, 0, 0)

print(answer)