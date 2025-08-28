let arr = [1, 2, 3, 4];

function calculateProuductOfArrayExceptSelf(arr) {
  let n = arr.length;
  let pre = 1,
    post = 1;

  let result = new Array(n).fill(1);
  // For pre
  for (let i = 0; i < n; i++) {
    result[i] = pre;
    pre = pre * arr[i];
  }

  //   For post
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * post;
    post = post * arr[i];
  }

  return result;
}

console.log(calculateProuductOfArrayExceptSelf(arr));
