let arr = [1, 2, 3, 4, 5, 6, 7];

function binarySearch(arr, target) {
  let n = arr.length;
  let start = 0;
  let end = n - 1;
  let mid = start + (end - start) / 2;

  while (start <= end) {
    if (arr[mid] === target) {
      return mid;
    }

    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = start + (end - start) / 2;
  }
  return -1;
}

console.log(binarySearch(arr, 61));
