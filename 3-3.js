class StackOfStacks {
  constructor(limit) {
    this._limit = limit;
    this.stacks = [[]];
  }

  _getTopStack() {
    return this.stacks[this.stacks.length - 1];
  }

  push(val) {
    const topStack = this._getTopStack();
    if (topStack.length >= this.max) this.stacks.push([val]);
    else topStack.push(val);
  }

  pop() {
    const topStack = this._getTopStack();
    const val = topStack.pop();
    if (this.stacks.length > 1 && topStack.length === 0) this.stacks.pop();
    return val;
  }

  peek() {
    const topStack = this._getTopStack();
    return topStack[topStack.length - 1];
  }

  popAt(number) {
    
  }

  isEmpty() {
    const topStack = this._getTopStack();
    return topStack.length === 0;
  }
}

const stack = new StackOfStacks(5);

console.log(stack.peek())
console.log(stack)
console.log(stack.isEmpty())
stack.push(1)
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
console.log(stack)
stack.push(1)
stack.push(1)
console.log(stack)
stack.pop()
console.log(stack)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(5)
console.log(stack.peek())
console.log(stack)
// console.log(stack)
// console.log(stack)
// console.log(stack)
// console.log(stack)
// console.log(stack)