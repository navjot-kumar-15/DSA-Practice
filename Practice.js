let n = [1, 22, 23];
let val = n
  .join(" ")
  .split(" ")
  .map((v) => v.length);

console.log(val);
