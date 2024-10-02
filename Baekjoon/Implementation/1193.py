import sys

input = sys.stdin.readline
x = int(input())

is_increasing = True
upper = 1
lower = 1
for i in range(x - 1):
  if upper == 1:
    if lower % 2 == 0:
      is_increasing = False
      lower -= 1
      upper += 1
    else:
      lower += 1
  elif lower == 1:
    if upper % 2 == 0:
      upper += 1
    else:
      is_increasing = True
      upper -= 1
      lower += 1
  else:
    if is_increasing:
      upper -= 1
      lower += 1
    else:
      upper += 1
      lower -= 1

print('%d/%d' % (upper, lower))