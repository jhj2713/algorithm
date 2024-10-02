import sys
import math

input = sys.stdin.readline
number_arr = list(map(int, list(input())[:-1]))

sorted_numbers = sorted(number_arr)
count_dict = {}
# 6,9는 6으로 통일
for num in number_arr:
  if num == 9:
    num = 6
  if num in count_dict:
    count_dict[num] += 1
  else:
    count_dict[num] = 1

if 6 in count_dict:
  count_dict[6] = math.floor(count_dict[6] / 2 + 0.5)
max_cnt = 0
for i in range(10):
  if i in count_dict:
    max_cnt = max(max_cnt, count_dict[i])

print(max_cnt)