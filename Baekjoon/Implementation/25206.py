import sys

input = sys.stdin.readline

grade_map = {
  'A+': 4.5,
  'A0': 4,
  'B+': 3.5,
  'B0': 3,
  'C+': 2.5,
  'C0': 2,
  'D+': 1.5,
  'D0': 1,
  'F': 0
}

credit_sum = 0
grade_sum = 0

for _ in range(20):
  name, credit, grade = map(lambda x:x, input().split())
  if grade == 'P':
    continue
  grade_sum += (float(credit) * grade_map[grade])
  credit_sum += float(credit)

print('%.6f' % (grade_sum / credit_sum))