import sys

input = sys.stdin.readline

str = list(input().strip())

for i in range(len(str) - 1):
  if str[i] == 'X' and i < len(str) - 3:
    if str[i+1] == 'X' and str[i+2] == 'X' and str[i+3] == 'X':
      str[i] = 'A'
      str[i+1] = 'A'
      str[i+2] = 'A'
      str[i+3] = 'A'
      continue
  if str[i] == 'X' and str[i+1] == 'X':
    str[i] = 'B'
    str[i+1] = 'B'

if 'X' in str:
  print(-1)
else:
  print(''.join(str))