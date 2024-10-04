import sys

input = sys.stdin.readline

n = int(input())

arr = [i for i in range(1, n+1)]

is_trash = True
answer = ''
while len(arr) != 1:
  val = arr.pop(0)
  if is_trash:
    answer += '%d ' % val
  else:
    arr.append(val)
  is_trash = not is_trash

answer += '%d' % arr[0]
print(answer)