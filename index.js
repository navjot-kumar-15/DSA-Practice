// // Linked list

// class Node {
//   constructor(value) {
//     this.head = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }

//   push(value) {
//     let newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       return;
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }

//   pop() {
//     if (!this.head) {
//       return undefined;
//     }

//     let temp = this.head;
//     let prev = this.head;

//     while (temp.next) {
//       prev = temp;
//       temp = prev.next;
//     }

//     this.tail = prev;
//     this.tail.next = null;
//     this.length--;

//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return temp;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     }

//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   shift() {
//     let temp = this.head;
//     if (!this.head) {
//       return undefined;
//     }

//     this.head = this.head.next;
//     temp.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.tail = null;
//     }
//     return temp;
//   }

//   getFirstElement() {
//     return this.head.head;
//   }
//   getLastElement() {
//     let temp = this.head;
//     if (!temp) {
//       return null;
//     }
//     while (temp) {
//       if (!temp.next) {
//         return temp;
//       }

//       temp = temp.next;
//     }
//   }

//   get(index) {
//     let temp = this.head;
//     let counter = 0;

//     while (temp) {
//       if (counter === index) {
//         return temp;
//       }
//       counter++;
//       temp = temp.next;
//     }
//     return null;
//   }

//   set(index, value) {
//     let temp = this.head;
//     let counter = 0;
//     while (temp) {
//       if (counter === index) {
//         temp.head = value;
//       }

//       counter++;
//       temp = temp.next;
//     }
//     return this;
//   }
// }

// let newNodeList = new LinkedList(0);
// newNodeList.push(1);

// console.log(newNodeList.set(1, 4));

// Practice LinkedList

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    prev.next = null;
    this.length--;
    return temp;
  }

  unshift(value) {
    let temp = new Node(value);
    if (!this.head) {
      this.head = temp;
      this.tail = temp;
    }

    temp.next = this.head;
    this.head = temp;
    this.length++;
    return this;
  }

  shift() {
    let temp = this.head;
    if (!this.head) {
      return undefined;
    }
    this.head = temp.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  get(index) {
    let temp = this.head;
    let counter = 0;
    while (temp) {
      if (temp.head === index) {
        return temp;
      }
      temp = temp.next;
      counter++;
    }
    return null;
  }

  set(index, value) {
    let val = this.get(index);
    if (!val) {
      return undefined;
    }
    val.head = value;
    return this;
  }
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    let newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  size() {
    let temp = this.head;
    let counter = 0;
    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }
}

const newNode = new MyLinkedList(1);
newNode.push(2);
newNode.insert(0, 22);
console.log(newNode);
