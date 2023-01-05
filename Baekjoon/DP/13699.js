const input = "3";
const n = Number(input);
const t = new Array(n + 1).fill(0n);
t[0] = 1n;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    t[i] += BigInt(t[j]) * BigInt(t[i - j - 1]);
  }
}

console.log(t[n].toString());
