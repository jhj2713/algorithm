import sys

input = sys.stdin.readline

strings = list(input().strip())

def is_right_string(strings):
  q = []
  for i in range(len(strings)):
    if strings[i] == '(' or strings[i] == '[':
      q.append(strings[i])
    elif strings[i] == ')' or strings[i] == ']':
      if not q:
        return False
      prev_str = q.pop(-1)
      if not ((prev_str == '(' and strings[i] == ')') or (prev_str == '[' and strings[i] == ']')):
        return False
  
  if q:
    return False
  
  return True

def find_part(idx):
  answer = 0
  q = []
  i = idx
  while i < len(strings):
    # ( or [면 내부 재귀호출
    if strings[i] == '(' or strings[i] == '[':
      val, end_idx = find_part(i + 1)
      if strings[i] == '(':
        if val == 0:
          answer += 2
        else:
          answer += val * 2
      else:
        if val == 0:
          answer += 3
        else:
          answer += val * 3
      i = end_idx
    
    # 큐에 값이 없는데 ] or )이면 리턴
    elif not q and (strings[i] == ')' or strings[i] == ']'):
      return (answer, i)
    
    i += 1
  
  return (answer, len(strings)-1)

if is_right_string(strings):
  answer, idx = find_part(0)
  print(answer)
else:
  print(0)