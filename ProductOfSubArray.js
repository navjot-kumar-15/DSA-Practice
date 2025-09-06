let arr = [2, 3, -2, 4];

function productOfSubArray(arr) {
  let n = arr.length;

  let min = arr[0],
    max = arr[0],
    answer = 0;

  for (let i = 0; i < n; i++) {
    let curr = arr[i];
    let temp = Math.max(curr, Math.max(curr * max, curr * min));
    min = Math.min(curr, Math.min(curr * max, curr * min));
    max = temp;
    answer = Math.max(answer, max);
  }
  return answer;
}

console.log(productOfSubArray(arr));
