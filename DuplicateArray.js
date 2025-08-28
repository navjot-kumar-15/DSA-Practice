let arr = [1, 2, 3, 4, 5, 5, 6];

function containDuplicate(arr) {
  let n = arr.length;

  let map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      return true;
    }
    map.set(arr[i], 1);
  }
  return false;
}

// Contain duplicate II

function containDuplicateII(arr, k) {
  let map = new Map();
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      return true;
    }

    map.set(arr[i], i);
    if (map.size > k) {
      let val = arr[i - k];
      map.delete(val);
    }
  }
  return false;
}

console.log(containDuplicateII(arr, 3));
