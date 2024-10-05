import sys

input = sys.stdin.readline

n, m = map(int, input().split())
dna = []
for _ in range(n):
  dna.append(input().strip())

nucleotide = ['A', 'C', 'G', 'T']
answer = ''
dna_cnt = 0
for j in range(m):
  max_nu = ''
  max_cnt = 0
  not_cnt = 0
  for nu in nucleotide:
    cnt = 0
    for i in range(n):
      if dna[i][j] == nu:
        cnt += 1
    if max_cnt < cnt:
      max_cnt = cnt
      not_cnt = n - cnt
      max_nu = nu
  
  answer += max_nu
  dna_cnt += not_cnt

print(answer)
print(dna_cnt)