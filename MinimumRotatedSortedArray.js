let arr = [7, 8, 0, 1, 2, 3, 4, 5, 6];

function findMinimumRotatedSortedArray(arr) {
  let n = arr.length;

  let left = 0;
  let right = n - 1;
  let ans = arr[0];

  while (left <= right) {
    if (arr[left] < arr[right]) {
      ans = Math.min(ans, arr[left]);
    }
    let mid = Math.floor((left + right) / 2);

    ans = Math.min(ans, arr[mid]);

    if (arr[left] < arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}

// console.log(findMinimumRotatedSortedArray(arr));

// Search rotated sorted array

function searchRotatedSortedArray(arr, target) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[left] === target) {
      return left;
    }

    if (arr[right] === target) {
      return right;
    }

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[left] > arr[mid] && arr[left] >= target && arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
}

// console.log(searchRotatedSortedArray(arr, 7));

function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    }

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}

console.log(twoSum(arr, 9));
