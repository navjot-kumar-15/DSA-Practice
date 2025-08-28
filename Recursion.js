function mergeSort(arr1, m, arr2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    i = m + n - 1;

  while (p2 >= 0) {
    if (p1 >= 0 && arr1[p1] > arr2[p2]) {
      arr1[i] = arr1[p1];
      p1--;
    } else {
      arr1[i] = arr2[p2];
      p2--;
    }
    i--;
  }

  return arr1;
}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6];
console.log(mergeSort(arr1, 4, arr2, 3));
