// // Double link list

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }

//   push(value) {
//     if (!this.head) {
//       this.head = new Node(value);
//       this.tail = this.head;
//     }
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
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
//       this.tail = null;
//     }
//     let temp = this.tail;
//     this.tail = this.tail.prev;
//     this.tail.next = null;
//     temp.prev = null;
//     this.length--;
//     return temp;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     }

//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     return this;
//   }
// }

// const newNode = new DoublyLinkList(6);
// newNode.push(7);

// console.log(newNode.unshift(15));
// // console.log(newNode);
// =========================================================================
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkList {
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
//       this.tail = this.head;
//       return this;
//     }

//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   pop() {
//     let temp = this.tail;

//     if (this.length === 0) {
//       return undefined;
//     }

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     }

//     this.tail = this.tail.prev;
//     this.tail.next = null;
//     temp.prev = null;
//     this.length--;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     }

//     let temp = this.head;
//     newNode.next = temp;
//     temp.prev = newNode;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   shift() {
//     let temp = this.head.next;
//     if (this.length === 0) {
//       return undefined;
//     }

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     }
//     this.head = temp;
//     temp.prev = null;
//     this.length--;
//     return this;
//   }
// }

// const doubly = new DoublyLinkList(2);
// doubly.push(3);
// // doubly.pop();
// doubly.unshift(15);
// doubly.shift();

// console.log(doubly);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkList {
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
//       this.tail = this.head;
//     }

//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   pop() {
//     let temp = this.head;
//     let prev = null;
//     while (temp.next) {
//       prev = temp;
//       temp = prev.next;
//     }

//     prev.next = null;
//     temp.prev = null;
//     this.tail = prev;
//     this.length--;
//     return this;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     }

//     let temp = this.head;
//     newNode.next = temp;
//     temp.prev = newNode;
//     this.head = newNode;
//     this.length++;

//     return this;
//   }

//   shift() {
//     let temp = this.head;

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     }

//     this.head = this.head.next;
//     temp.next = null;
//     this.head.prev = null;
//     this.length--;

//     return this;
//   }

//   get(index) {
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
//     let newNode = new Node(value);
//     let res;

//     if (index === 0) {
//       res = this.get(0);
//     } else {
//       res = this.get(index - 1);
//     }

//     let temp = res.next;
//     res.next = newNode;
//     newNode.prev = res;
//     newNode.next = temp;
//     temp.prev = newNode;
//     this.head = newNode;
//     this.length++;

//     return this;
//   }
// }

// const newList = new DoublyLinkList(1);
// newList.push(2);
// newList.push(3);
// // newList.pop();
// newList.unshift(15);
// // newList.shift();
// // newList.shift();
// newList.insert(0, 333);
// console.log(newList);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.tail;
    let prev = temp.prev;
    prev.next = null;
    temp.prev = null;
    this.tail = prev;
    this.length--;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    let temp = this.head;
    newNode.next = temp;
    this.head = newNode;
    this.length++;

    return this;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length--;
    return this;
  }

  get(index) {
    if (index > this.length) {
      return undefined;
    }

    let counter = 0;
    let temp = this.head;

    while (temp.next) {
      if (counter === index) {
        return temp;
      }

      temp = temp.next;
      counter++;
    }
    return null;
  }
}

const newList = new MyLinkedList(1);
newList.push(2);
// newList.pop();
newList.unshift(3);
newList.shift();
console.log(newList.get(0));
