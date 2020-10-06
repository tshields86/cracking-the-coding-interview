class TripleStack {
  constructor() {
    this._array = [];
    this._lengths = [0, 0, 0];
  }

  _getLength(stack) {
    return this._lengths[stack - 1];
  }

  push(stack, val) {
    const idx = this._lengths[stack - 1] * 3 + stack - 1;
    this._array[idx] = val;
    this._lengths[stack - 1]++;
  }

  pop(stack) {
    const length = this._lengths[stack - 1];
    let value;
    if (length) {
      const idx = (length - 1) * 3 + stack - 1;
      value = this._array[idx];
      this._array[idx] = undefined;
      this._lengths[stack - 1]--;
    }
    return value;
  }

  peek(stack) {
    let length = this._getLength(stack),
      value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stack - 1;
      value = this._array[idx];
    }
    return value;
  }

  isEmpty(stack) {
    return this._getLength(stack) === 0;
  }
};

const stack = new TripleStack();

console.log(stack);
console.log(stack.isEmpty(1));
stack.push(1, 1);
console.log(stack);
console.log(stack.isEmpty(1));
stack.push(2, 2);
stack.push(3, 3);
console.log(stack);
stack.push(1, 1);
stack.push(1, 1);
console.log(stack);
stack.push(1, 1);
stack.push(2, 2);
stack.push(3, 3);
console.log(stack);
console.log(stack.pop(1));
console.log(stack.pop(2));
console.log(stack.pop(3));
console.log(stack);

// _getLength
// push
// pop
// peek
// isEmpty