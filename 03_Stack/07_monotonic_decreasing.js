class MonotonicDecreasingStack {
    constructor() {
      this.stack = [];
    }
  
    // Method to push an element to the stack
    push(value) {
      // Maintain the monotonic decreasing property
      while (this.stack.length > 0 && this.stack[this.stack.length - 1] < value) {
        this.stack.pop();
      }
      this.stack.push(value);
    }
  
    // Method to pop an element from the stack
    pop() {
      if (this.stack.length === 0) {
        throw new Error("Stack is empty");
      }
      return this.stack.pop();
    }
  
    // Method to get the top element of the stack
    top() {
      if (this.stack.length === 0) {
        throw new Error("Stack is empty");
      }
      return this.stack[this.stack.length - 1];
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  
    // Method to get the size of the stack
    size() {
      return this.stack.length;
    }
  
    // Method to print the stack
    printStack() {
      console.log(this.stack);
    }
  }
  
  // Example usage
  const stack = new MonotonicDecreasingStack();
  stack.push(5);
  stack.push(3);
  stack.push(8); // This will remove 3 and 5, as 8 is greater
  stack.push(2); 
  stack.printStack(); // Output will be [8, 2]
  stack.pop(); // Removes 2
  console.log(stack.top()); // Outputs 8
  console.log(stack.isEmpty()); // Outputs false
  console.log(stack.size()); // Outputs 1
  