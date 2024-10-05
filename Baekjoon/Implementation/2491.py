import sys

input = sys.stdin.readline

n = int(input())
numbers = list(map(int, input().split()))

answer = 0
# 증가 수열 길이 확인
cnt = 1
for i in range(1, len(numbers)):
  if numbers[i-1] > numbers[i]:
    answer = max(answer, cnt)
    cnt = 1
  else:
    cnt += 1
answer = max(answer, cnt)

# 감소 수열 길이 확인
cnt = 1
for i in range(1, len(numbers)):
  if numbers[i-1] < numbers[i]:
    answer = max(answer, cnt)
    cnt = 1
  else:
    cnt += 1
answer = max(answer, cnt)

print(answer)