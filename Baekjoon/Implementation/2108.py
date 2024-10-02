import sys

input = sys.stdin.readline
n = int(input())

numbers = []

for _ in range(n):
  numbers.append(int(input()))

# 산술 평균
sum = 0
for num in numbers:
  sum += num

average = round(sum / n)

# 중앙값
sorted_numbers = sorted(numbers)
middle = sorted_numbers[n // 2]

# 최빈값
numbers_set = list(set(numbers))
count_dict = {}
for num in numbers:
  if num in count_dict:
    count_dict[num] += 1
  else:
    count_dict[num] = 1

max_nums = []
max_cnt = 0
for num in numbers_set:
  cnt = count_dict[num]
  if max_cnt < cnt:
    max_nums = [num]
    max_cnt = cnt
  elif max_cnt == cnt:
    max_nums.append(num)

most_frequent = 0
if len(max_nums) == 1:
  most_frequent = max_nums[0]
else:
  sorted_max_nums = sorted(max_nums)
  most_frequent = sorted_max_nums[1]

# 범위
minimum = min(numbers)
maximum = max(numbers)
range = maximum - minimum

print('%d\n%d\n%d\n%d' % (average, middle, most_frequent, range))