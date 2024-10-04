# 시간 초과
import sys
from itertools import permutations

input = sys.stdin.readline

alphabet = list(input().strip())
sorted_alphabet = sorted(alphabet)

def is_palindrome(str):
  length = len(str) // 2
  for i in range(length):
    if str[i] != str[len(str) - i - 1]:
      return False
  return True

answer = ''
for arr in permutations(sorted_alphabet):
  if is_palindrome(arr):
    answer = ''.join(list(arr))
    break

if not answer:
  print("I'm Sorry Hansoo")
else:
  print(answer)

# 정답 코드
import sys

input = sys.stdin.readline

alphabet = list(input().strip())

alphabet_dict = {}
alphabet_arr = []
for alp in alphabet:
  if alp in alphabet_dict:
    alphabet_dict[alp] += 1
  else:
    alphabet_dict[alp] = 1
    alphabet_arr.append(alp)

sorted_alphabet = sorted(alphabet_arr)

answer = ""
middle_alphabet = ''

for alp in sorted_alphabet:
  if alphabet_dict[alp] % 2 == 1 and len(alphabet) % 2 == 1:
    if not middle_alphabet:
      alphabet_dict[alp] -= 1
      middle_alphabet = alp
      if alphabet_dict[alp] == 0:
        sorted_alphabet.remove(alp)
    else:
      answer = "I'm Sorry Hansoo"
      break
  elif alphabet_dict[alp] % 2 == 1:
    answer = "I'm Sorry Hansoo"
    break

if answer:
  print(answer)
  sys.exit()

answer_arr = ['' for _ in range(len(alphabet))]
if middle_alphabet:
  answer_arr[len(answer_arr) // 2] = middle_alphabet
for i in range(len(answer_arr) // 2):
  current_alphabet = sorted_alphabet[0]
  alphabet_dict[current_alphabet] -= 2
  answer_arr[i] = current_alphabet
  answer_arr[len(answer) - i - 1] = current_alphabet
  if alphabet_dict[current_alphabet] == 0:
    sorted_alphabet.pop(0)

if answer:
  print(answer)
else:
  print(''.join(answer_arr))
