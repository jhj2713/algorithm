import sys

input = sys.stdin.readline

n, k = map(int, input().split())

numbers = [i for i in range(2, n+1)]

answer = 0
while k > 0:
  min = numbers.pop(0)
  k -= 1
  if k == 0:
    answer = min
    break

  idx = 0
  while idx < len(numbers):
    if numbers[idx] % min == 0:
      k -= 1
      if k == 0:
        answer = numbers[idx]
        break
      numbers.pop(idx)
      idx -= 1
    idx += 1

print(answer)