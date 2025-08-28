// Two sum problem

let arr = [1, 2, 3, 4, 5];
let target = 6;

for (let i = 0; i < arr.length; i++) {
  if (i === arr.length) {
    if (arr[i] === target) {
      console.log([i, -1]);
    }
  }
  if (i + 1 < arr.length) {
    let sum = arr[i] + arr[i + 1];
    console.log("Sum :", sum);
    if (sum === target) {
      console.log([i, i + 1]);
    }
  }
}

// Brute force
function bruteForce(arr, target) {
  let n = arr.length;

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; i + 1 < n; j++) {
      let sum = arr[i] + arr[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
}

function optimizeTwoSum(arr, target) {
  let n = arr.length;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    let com = target - arr[i];
    if (map.has(com)) {
      return [map.get(com), i];
    }
    map.set(arr[i], i);
  }
  return [-1, -1];
}

// console.log(optimizeTwoSum(arr, target));
