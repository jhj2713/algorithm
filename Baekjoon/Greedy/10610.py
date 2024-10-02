import sys

input = sys.stdin.readline
numbers = list(map(int, list(input()[:-1])))

total_sum = 0
for num in numbers:
  total_sum += num

answer = 0
# 수의 모든 자릿수 합이 3의 배수여야 하고 수의 마지막 자릿수가 0이어야 함
if total_sum % 3 != 0 or numbers.count(0) == 0:
  answer = -1
else:
  num_arr = list(map(str, sorted(numbers, reverse=True)))
  answer = ''.join(num_arr)

print(answer)