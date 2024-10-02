import sys

input = sys.stdin.readline
n, m = map(int, input().split())

guitar_lines = []

for _ in range(m):
  guitar_lines.append(list(map(int, input().split())))

bundle = list(map(lambda x:x[0], guitar_lines))
for money in guitar_lines:
  bundle.append(money[1] * 6)

sorted_bundle = sorted(bundle)
sorted_single = sorted(list(map(lambda x:x[1], guitar_lines)))

bundle_money = (n // 6) * sorted_bundle[0]
single_money = (n % 6) * sorted_single[0]

only_bundle = (n // 6 + 1) * sorted_bundle[0]

answer = min(bundle_money + single_money, only_bundle)
print(answer)