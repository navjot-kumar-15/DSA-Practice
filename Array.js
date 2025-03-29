// class MyArray {
//   constructor() {
//     this.data = {};
//     this.length = 0;
//   }

//   push(value) {
//     if (!this.data) {
//       this.data[0] = value;
//     }

//     this.data[this.length] = value;
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (this.length === 0) {
//       return undefined;
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//     return this;
//   }

//   unshift(value) {
//     if (!value || value === undefined) {
//       return this;
//     }
//     for (let i = this.length; i > 0; i--) {
//       this.data[i] = this.data[i - 1];
//     }
//     this.data[0] = value;
//     this.length++;
//     return this;
//   }

//   shift() {
//     for (let i = 0; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//     return this;
//   }

//   getIndex(index) {
//     return this.data[index];
//   }

//   set(index, value) {
//     this.data[index] = value;
//     return this;
//   }
// }

// const newArray = new MyArray();
// newArray.push(1);
// newArray.push(5);
// newArray.push(9);
// newArray.unshift(15);
// newArray.set(1, 11);

// console.log(newArray);
