class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = this.first;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;

    return this;
  }

  dequeue() {
    let temp = this.first;

    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = this.first.next;
    temp.next = null;
    this.length--;

    return null;
  }
}

const newList = new Queue(1);
newList.enqueue(2);
newList.enqueue(3);
newList.dequeue();
newList.dequeue();
console.log(newList);
