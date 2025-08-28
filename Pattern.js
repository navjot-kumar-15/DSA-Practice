let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % 2 == 0) {
      process.stdout.write("0 ");
    } else {
      process.stdout.write("1 ");
    }
  }
  console.log();
}
