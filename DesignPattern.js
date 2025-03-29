// Sliding window
let arr = [2, 1, 8, 4, 9, 5, 3];

/*
15
21
25
24


*/

// function slidingWindow(arr, w) {
//   let n = arr.length;

//   let current = 0;

//   for (let i = 0; i < w; i++) {
//     current += arr[i];
//   }

//   let maxValue = current;

//   for (let j = 1; j < n - w; j++) {
//     current = current - arr[j - 1] + arr[j + w - 1];

//     if (current > maxValue) {
//       maxValue = current;
//     }
//   }

//   return maxValue;
// }

// console.log(slidingWindow(arr, 4));

// Two Pointer approach

// let arr1 = [1, 2, 3, 5, 7, 10, 11, 15];

// function twoSum(arr, target) {
//   let n = arr.length;
//   let start = 0;
//   let end = n - 1;
//   let value1 = [];

//   while (start < end) {
//     let current = arr[start] + arr[end];

//     if (current === target) {
//       let val = `${arr[start]}   ${arr[end]}`;
//       value1.push(val);
//       start++;
//       end--;
//     } else if (current > target) {
//       end--;
//     } else {
//       start++;
//     }
//   }

//   return value1;
// }

// console.log(twoSum(arr1, 15));

// Approach 1
let arr2 = [3, 2, 7, 5, 1, 9, 11];

// function firstSlidingApproach(arr, w) {
//   let n = arr.length;

//   let max_value = Number.NEGATIVE_INFINITY;
//   for (let i = 0; i <= n - w; i++) {
//     let current = 0;
//     for (let j = i; j <= i + w - 1; j++) {
//       current += arr[j];
//     }//     if (current > max_value) {
//       max_value = current;
//     }
//   }

//   return max_value;
// }

// console.log(firstSlidingApproach(arr2, 4));

// ### Approach 2 of sliding window

//  Remove duplicate

let arr3 = [5, 5, 2, 1, 6, 7, 8, 6, 7];

// function removeDuplicate(arr) {
//   let n = arr.length;
//   arr = arr.sort();
//   let new_arr = [];
//   new_arr[0] = arr[0];
//   let x = 0;

//   for (let i = 1; i < n; i++) {
//     if (new_arr[x] !== arr[i]) {
//       x += 1;
//       new_arr[x] = arr[i];
//     }
//   }

//   return new_arr;
// }

// function anotherRemoveApproach(arr) {
//   let n = arr.length;

//   let x = 0;

//   for (let i = 1; i < n; i++) {
//     if (arr[1] !== arr[x]) {
//       x += 1;

//       arr[x] = arr[i];
//     }
//   }
// }

// console.log(removeDuplicate(arr3));

function subSum(arr, w) {
  let n = arr.length;
  let max_value = Number.NEGATIVE_INFINITY;
  for (let i = 0; i <= n - w; i++) {
    let sum = 0;
    for (let j = i; j <= i + w - 1; j++) {
      sum += arr[j];
    }

    if (sum > max_value) {
      max_value = sum;
    }
  }
  return max_value;
}

// console.log(subSum(arr3, 3));
