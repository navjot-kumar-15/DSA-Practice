// ## Two sum problem =====================================================

// function twoSum(arr, target) {
//   let n = arr.length;
//   let map = {};
//   for (let i = 0; i < n; i++) {
//     let complement = target - arr[i];
//     if (map[complement]) {
//       return [map[complement], i];
//     }
//     map[arr[i]] = i;
//   }

//   return map;
// }

// let arr = [1, 2, 3, 4, 5];

// console.log(twoSum(arr, 5));

// ====================================================================================================

// ### ================================================================================================
// Buy and sell stock

// let arr = [7, 1, 5, 3, 6, 4];

// function buyAndSell(arr) {
//   let n = arr.length;
//   let min_value = arr[0];
//   let profit = 0;

//   for (let i = 0; i < n; i++) {
//     if (arr[i] < min_value) {
//       min_value = arr[i];
//     }
//     profit = Math.max(profit, arr[i] - min_value);
//   }

//   return profit;
// }

// console.log(buyAndSell(arr));

// ==========================================================================================================

// ###
// Contain duplicate value

// function containDuplicate(arr) {
//   let n = arr.length;

//   let value = new Set();

//   for (let i = 0; i < n; i++) {
//     if (value.has(arr[i])) {
//       return true;
//     }

//     value.add(arr[i]);
//   }

//   return false;
// }

// let arr = [1, 2, 3, 4, 5];

// console.log(containDuplicate(arr));

// # 2  contain duplicate II
// Condition is arr[i] === arr[j] and i -j <= k

// function containDuplicate2(arr, k) {
//   let n = arr.length;
//   let map = new Map();

//   for (let i = 0; i < n; i++) {
//     if (map.has(arr[i])) {
//       let diff = Math.abs(map.get(arr[i]) - i);
//       if (diff <= k) {
//         return true;
//       }
//     }
//     map.set(arr[i], i);
//   }
//   return false;
// }

// ## another approach
// function containDuplicate2(arr, k) {
//   let n = arr.length;
//   let map = new Map();

//   for (let i = 0; i < k; i++) {
//     if (map.has(arr[i])) {
//       let diff = Math.abs(map.get(arr[i]) - i);
//       if (diff <= k) {
//         return true;
//       }
//     }
//     map.set(arr[i], i);
//   }

//   for (let i = 1; i < n - k; i++) {
//     if (map.has(arr[i])) {
//       let diff = Math.abs(map.get(arr[i]) - i);
//       if (diff <= k) {
//         return true;
//       }
//     }
//     map.set(arr[i + k - 1], i + k - 1);
//   }

//   return false;
// }

// let arr = [1, 2, 3, 1, 4];
// console.log(containDuplicate2(arr, 3));

// function sum(arr) {
//   let value = new Array(arr.length);
//   value.fill(1);
//   let pre = 1,
//     post = 1;

//   for (let i = 0; i < arr.length; i++) {
//     value[i] = pre;
//     pre = arr[i] * pre;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     value[i] = value[i] * post;
//     post = arr[i] * post;
//   }

//   return value;
// }

// let arr = [1, 2, 3, 4];
// console.log(sum(arr));

let arr = [1, 2, 3, 4];

function pre(arr) {
  let n = arr.length;
  let value = new Array(n).fill(1);

  let pre = 1,
    post = 1;

  for (let i = 0; i < n; i++) {
    value[i] = pre;
    pre = arr[i] * pre;
  }
}
