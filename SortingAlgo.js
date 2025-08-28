// Selection Sort
let arr = [65, 25, 12, 22, 11];
let n = arr.length;

function SelectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

let arr1 = [6, 2, 8, 55, 4, 10];

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i; j < n - i + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr1));
