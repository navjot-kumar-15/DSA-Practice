// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(value) {
//     const newNode = new Node(value);

//     this.first = newNode;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);

//     if (this.length === 0) {
//       this.first = newNode;
//     }

//     let temp = this.first;
//     newNode.next = temp;
//     this.first = newNode;
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (this.length === 0) {
//       return undefined;
//     }
//     if (this.length === 1) {
//       this.first = null;
//     }
//     let temp = this.first;
//     this.first = this.first.next;
//     temp.next = null;
//     this.length--;
//     return this;
//   }
// }

// const myStack = new Stack(1);
// myStack.push(2);
// myStack.push(3);
// myStack.pop();
// myStack.pop();

// console.log(myStack);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    // this.last = this.first;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
    }

    let temp = this.first;
    newNode.next = temp;
    this.first = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 1) {
      this.first = null;
    }

    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;
    this.first = this.first.next;
    this.length--;

    return temp;
  }
  min() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.first;
    let minValue = current.value;

    while (current.next) {
      current = current.next;

      if (current.value < minValue) {
        minValue = current.value;
      }
    }
    return minValue;
  }
}

// const newStack = new Stack(1);

// newStack.push(2);
// newStack.push(3);
// newStack.push(4);

// console.log(newStack.min());

function isValidParenthesis(str) {
  let stack = [];

  let brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      let top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(isValidParenthesis("([)])"));

function reverseString(str) {
  str = str.split("");
  return str.reverse().join("");
}

console.log(reverseString("hello"));
