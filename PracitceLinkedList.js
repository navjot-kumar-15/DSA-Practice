class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
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
    let temp = this.head;
    let prev = null;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    prev.next = null;
    this.length--;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
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
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    if (this.length === 0) {
      return undefined;
    }

    this.head = this.head.next;
    this.length--;
    return this;
  }

  get(index) {
    let temp = this.head;
    let counter = 0;

    while (temp) {
      if (counter === index) {
        return temp;
      }
      temp = temp.next;
      counter++;
    }
    return false;
  }

  set(index, value) {
    let res = this.get(index);
    if (!res) {
      return undefined;
    }

    res.head = value;
    return res;
  }

  insert(index, value) {
    const newNode = new Node(value);
    let res;
    if (index === 0) {
      res = this.get(index);
    } else {
      res = this.get(index - 1);
    }
    let nextVal = res.next;
    res.next = newNode;
    newNode.next = nextVal;
    this.head = newNode;
    this.length++;
    return this;
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

const newList = new LinkedList(1);
newList.push(2);
newList.push(3);
newList.unshift(15);
newList.reverse();
console.log(newList);
