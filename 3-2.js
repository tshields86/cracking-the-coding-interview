class MinStack {
  constructor() {
    this._array = [];
  }

  push(value) {
    let min = this.min();
    this._stack.push({
      value: value,
      min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value)
    });
  }

  pop() {
    if (!this.isEmpty()) {
      let item = this._stack.pop();
      return item.value;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      let item = this._stack[this._stack.length - 1];
      return item.value;
    }
  }

  min() {
    if (!this.isEmpty()) {
      let item = this._stack[this._stack.length - 1];
      return item.min;
    }
  }

  isEmpty() {
    return this._stack.length === 0;
  }
}