// // // LinkedList

// // class Node {
// //   constructor(value) {
// //     this.head = value;
// //     this.next = null;
// //   }
// // }

// // class MyLinkedList {
// //   constructor(value) {
// //     this.head = new Node(value);
// //     this.tail = this.head;
// //     this.length = 1;
// //   }

// //   push(value) {
// //     if (!this.head) {
// //       this.head = new Node(value);
// //       this.tail = this.head;
// //       this.length = 1;
// //     }

// //     const newNode = new Node(value);
// //     this.tail.next = newNode;
// //     this.tail = newNode;
// //     this.length++;

// //     if (this.length === 0) {
// //       this.head = null;
// //       this.tail = null;
// //     }
// //   }

// //   pop() {
// //     if (!this.head) {
// //       return undefined;
// //     }
// //     let temp = this.head;
// //     let prev = this.head;
// //     while (temp.next) {
// //       prev = temp;
// //       temp = prev.next;
// //     }

// //     this.tail = prev;
// //     this.tail.next = null;
// //     this.length--;
// //     return temp;

// //     if (this.length === 0) {
// //       this.head = null;
// //       this.tail = null;
// //     }
// //   }

// //   unshift(value) {
// //     let newNode = new Node(value);
// //     let head = this.head;
// //     this.head = newNode;
// //     this.head.next = head;
// //     this.length++;
// //     return newNode;
// //   }

// //   shift() {
// //     let temp = this.head;
// //     this.head = this.head.next;
// //     temp.next = null;
// //     this.length--;
// //     return temp;
// //   }

// //   getFirstElement() {
// //     return this.head;
// //   }

// //   getLastElement() {
// //     return this.pop();
// //   }

// //   get(value) {
// //     let temp = this.head;
// //     let counter = 0;

// //     while (temp) {
// //       if (temp.head === value) {
// //         return temp;
// //       }
// //       temp = temp.next;
// //     }
// //     return null;
// //   }

// //   index(value) {
// //     let temp = this.head;
// //     let counter = 0;

// //     while (temp) {
// //       if (counter === value) {
// //         return temp;
// //       }
// //       temp = temp.next;
// //       counter++;
// //     }
// //     return null;
// //   }

// //   set(index, value) {
// //     let temp = this.head;
// //     while (temp) {
// //       if (temp.head === index) {
// //         temp.head = value;
// //       }
// //       temp = temp.next;
// //     }
// //     return this;
// //   }

// //   insert(i, value) {
// //     let newNode = new Node(value);

// //     let temp = this.index(i - 1);

// //     newNode.next = temp.next;
// //     temp.next = newNode;
// //     this.length++;
// //     return temp;
// //   }

// //   size() {
// //     let temp = this.head;
// //     let count = 0;
// //     while (temp) {
// //       count++;
// //       temp = temp.next;
// //     }
// //     return count;
// //   }
// // }

// // const newLinkedList = new MyLinkedList(5);
// // newLinkedList.push(2);
// // newLinkedList.push(4);
// // newLinkedList.unshift(15);
// // // newLinkedList.shift();
// // // newLinkedList.getFirstElement
// // newLinkedList.insert(1, 11);
// // console.log(newLinkedList.size());

// // LinkedList Practice

// class Node {
//   constructor(value) {
//     this.head = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       return this;
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (this.length === 0) {
//       return undefined;
//     }

//     if (this.length === 1) {
//       this.head = null;
//     }

//     let temp = this.head;
//     let prev = this.head;

//     while (temp.next) {
//       prev = temp;
//       temp = prev.next;
//     }

//     prev.next = null;
//     this.tail = prev;
//     this.length--;
//     return this;
//   }

//   unshift(value) {
//     let temp = this.head;
//     let newNode = new Node(value);
//     newNode.next = temp;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   shift() {
//     if (this.length === 0) {
//       return undefined;
//     }

//     if (this.length === 1) {
//       this.head = null;
//     }
//     let temp = this.head;
//     this.head = temp.next;
//     temp.next = null;
//     this.length--;
//     return this;
//   }

//   get(index) {
//     let temp = this.head;
//     let counter = 0;

//     if (index === 0) {
//       return this.head;
//     }
//     while (temp) {
//       if (counter === index) {
//         return temp;
//       }
//       temp = temp.next;
//       counter++;
//     }
//     return false;
//   }

//   set(index, value) {
//     let res = this.get(index);
//     res.head = value;
//     return this;
//   }

//   insert(index, value) {
//     let newNode = new Node(value);
//     let res, temp;
//     if (index === 0) {
//       res = this.get(index);
//       temp = res.next;
//       res = newNode;
//       newNode.next = temp;
//     } else {
//       res = this.get(index - 1);
//       temp = res.next;
//       res.next = newNode;
//       newNode.next = temp;
//     }
//     if (!res) {
//       return undefined;
//     }
//     // console.log("Res value ================>>>>", res);
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
// }

// const newList = new LinkedList(1);
// newList.push(2);
// newList.push(3);
// newList.unshift(4);
// newList.insert(0, 121);
// console.log(newList);

// Practice linked list

// class Node {
//   constructor(value) {
//     this.head = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     }

//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     }

//     if (this.length === 0) {
//       return undefined;
//     }

//     let temp = this.head;
//     let prev = this.head;

//     while (temp.next) {
//       prev = temp;
//       temp = prev.next;
//     }

//     prev.next = null;
//     this.tail = prev;
//     this.length--;
//     return this;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     let temp = this.head;

//     newNode.next = temp;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   shift() {
//     if (this.length === 0) {
//       return undefined;
//     }

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     }
//     this.head = this.head.next;
//     this.length--;
//     return this;
//   }

//   getElement(index) {
//     if (index === 0) {
//       return this.head;
//     }

//     let temp = this.head;
//     let counter = 0;
//     while (temp) {
//       if (counter === index) {
//         return temp;
//       }
//       temp = temp.next;
//       counter++;
//     }
//     return false;
//   }

//   insert(index, value) {
//     const newNode = new Node(value);
//     let res = null;
//     let temp;
//     if (index === 0) {
//       res = this.getElement(index);
//       temp = res;
//       res = newNode;
//       newNode.next = temp;
//       return this;
//     } else {
//       res = this.getElement(index - 1);
//       temp = res.next;
//       res.next = newNode;
//       newNode.next = temp;
//     }
//     // this.head = newNode;
//     this.length++;
//     return this;
//   }

//   reverse() {
//     let temp = this.head;
//     this.head = this.tail;
//     this.tail = temp;

//     let next = temp;
//     let prev = null;

//     for (let i = 0; i < this.length; i++) {
//       next = temp.next;
//       temp.next = prev;
//       prev = temp;
//       temp = next;
//     }
//     return this;
//   }
// }

// const newList = new LinkedList(1);
// newList.push(2);
// newList.push(3);
// newList.push(4);

// // newList.pop();

// newList.unshift(15);
// newList.unshift(16);

// newList.insert(1, 111);
// console.log(newList.reverse());

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    return this;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    const temp = this.head;
    newNode.next = temp;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    const temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length--;
    return this;
  }

  get(index) {
    let counter = 0;
    let temp = this.head;

    if (index > this.length) {
      return undefined;
    }

    while (temp) {
      if (counter === index) {
        return temp;
      }
      temp = temp.next;
      counter++;
    }
    return null;
  }

  insert(index, value) {
    const newNode = new Node(value);
    let prev;
    let temp;
    if (index === 0) {
      prev = this.get(index);
      temp = this.head;
      newNode.next = temp;
    } else {
      prev = this.get(index - 1);
      temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
    }

    this.head = newNode;
    this.length++;

    return this;
  }

  size() {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      temp = temp.next;
      counter++;
    }
    return counter;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const newList = new MyLinkedList(1);
newList.push(2);
newList.push(3);
// newList.pop();
newList.unshift(15);
// newList.shift();

// newList.insert(0, 111);

console.log(newList.reverse());
