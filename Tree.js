// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     let temp = this.root;

//     while (true) {
//       if (newNode.value === temp.value) {
//         return undefined;
//       }
//       if (newNode.value < temp.value) {
//         if (temp.left === null) {
//           temp.left = newNode;
//           return this;
//         } else {
//           temp = temp.left;
//         }
//       } else {
//         if (temp.right === null) {
//           temp.right = newNode;
//           return this;
//         } else {
//           temp = temp.right;
//         }
//       }
//     }
//   }

//   includes(value) {
//     if (this.value === null) {
//       return undefined;
//     }

//     let temp = this.root;

//     while (temp) {
//       if (value < temp.value) {
//         temp = temp.left;
//       } else if (value > temp.value) {
//         temp = temp.right;
//       } else if (value === temp.value) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// // const tree = new BST();
// // tree.insert(10);
// // tree.insert(1);
// // tree.insert(5);
// // tree.insert(2);
// // tree.insert(11);
// // tree.insert(20);
// // console.log(tree.includes(11));

// // Recursion

// function countDown(number) {
//   if (number === 0) {
//     return;
//   }

//   console.log(number);
//   return countDown(number - 1);
// }

// countDown(5);

// ###
// Practice BST

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     if (value === "undefined" || !value) {
//       return undefined;
//     }

//     const newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     let temp = this.root;

//     while (true) {
//       if (newNode.value === temp.value) {
//         return this;
//       }

//       if (newNode.value < temp.value) {
//         if (temp.left === null) {
//           temp.left = newNode;
//           return this;
//         } else {
//           temp = temp.left;
//         }
//       } else {
//         if (temp.right === null) {
//           temp.right = newNode;
//           return this;
//         } else {
//           temp = temp.right;
//         }
//       }
//     }
//   }

//   includes(value) {
//     let temp = this.root;
//     if (!value) {
//       return false;
//     }
//     if (!this.root) {
//       return false;
//     }

//     if (value === temp.value) {
//       return true;
//     }

//     while (temp) {
//       if (value < temp.value) {
//         temp = temp.left;
//       } else if (value > temp.value) {
//         temp = temp.right;
//       } else if (value === temp.value) {
//         return true;
//       }
//     }

//     return false;
//   }

//   BFS() {
//     let current = this.root;
//     let queue = [];
//     let data = [];

//     queue.push(current);

//     while (queue.length) {
//       current = queue.shift();
//       data.push(current.value);

//       if (current.left) queue.push(current.left);
//       if (current.right) queue.push(current.right);
//     }
//     return data;
//   }
// }

// const tree = new BST();

// tree.insert(5);
// tree.insert(3);
// tree.insert(7);
// // console.log(tree.includes(9));

// let str = [51, 21, 33];

// // function subSum(arr) {
// //   let n = arr.length;
// //   let arrVal = [];

// //   for (let i = 0; i < n; i++) {
// //     let sum = 0;
// //     let len = arr[i]
// //       .toString()
// //       .split("")
// //       .map((number) => (sum += +number));
// //     arrVal.push(sum);
// //   }
// //   let obj = new Map();
// //   for (let i = 0; i < arrVal.length; i++) {
// //     if(obj.has(arrVal[i])) {
// //       obj.get(arrVal[i]) += 1
// //     }
// //     obj.set(arrVal[i], 1);
// //   }
// //   console.log(obj);
// // }

// // subSum(str);
// =========================================================================================================================================
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (!value) {
//       return undefined;
//     }

//     if (!this.root) {
//       this.root = newNode;
//       return this;
//     }
//     let temp = this.root;
//     while (true) {
//       if (newNode.value === temp.value) {
//         return this;
//       }

//       if (newNode.value < temp.value) {
//         if (temp.left === null) {
//           temp.left = newNode;
//           return this;
//         } else {
//           temp = temp.left;
//         }
//       } else {
//         if (temp.right === null) {
//           temp.right = newNode;
//           return this;
//         } else {
//           temp = temp.right;
//         }
//       }
//     }
//   }

//   includes(value) {
//     if (!value) {
//       return undefined;
//     }

//     let temp = this.root;

//     while (temp) {
//       if (value < temp.value) {
//         temp = temp.left;
//       } else if (value > temp.value) {
//         temp = temp.right;
//       } else if (value === temp.value) {
//         return true;
//       }
//     }
//     return false;
//   }

//   BFS() {
//     let current = this.root;
//     let queue = [];
//     let data = [];

//     queue.push(current);

//     while (queue.length) {
//       current = queue.shift();
//       data.push(current.value);
//       if (current.left) queue.push(current.left);
//       if (current.right) queue.push(current.right);
//     }
//     return data;
//   }

//   DFSPreOrder(node = this.root, data = []) {
//     if (node === null) {
//       return data;
//     }

//     data.push(node.value);

//     if (node.left) this.DFSPreOrder(node.left, data);
//     if (node.right) this.DFSPreOrder(node.right, data);

//     return data;
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) {
        return this;
      }

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  includes(value) {
    let temp = this.root;

    if (temp.value === value) {
      return true;
    }

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let current = this.root;
    let queue = [];
    let data = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }
}

const tree = new BST();

tree.insert(5);

tree.insert(4);
tree.insert(6);
tree.insert(7);
tree.insert(1);
tree.insert(2);
console.log(tree.BFS());
