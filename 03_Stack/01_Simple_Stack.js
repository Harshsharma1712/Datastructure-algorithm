class Stack{
    constructor() {
        this.items = []     //initlize an empty array to store the stack element
    }

    // method to add element 
    push(element){
        this.items.push(element)
    }

    // method to remove elemnt
    pop(){
        if(this.isEmpty())
            return "Stack is empty"

        return this.items.pop()
    }

    // method to return top element without removing it
    peek(){
        if(this.isEmpty())
            return "Stack is empty"

        return this.items[this.items.length - 1]
    }

    // method to check if stack is empty
    isEmpty(){
        if(this.items.length === 0){
            console.log("Stack is empty");
            return
        } else {
            console.log("Stack is not empty");
            return
        }
    }

    // methof to get size of the array
    size(){
        console.log("Size of the stack is: " + this.items.length)
        return
    }

    // print 
    print(){
        if(this.isEmpty())
            return "Stack is empty"
        
        return console.log(this.items);
    }
}

const stack1 = new Stack()

// stack1.isEmpty()
// stack1.size()
// stack1.peek()

stack1.push(10)
stack1.push(20)
stack1.push(30)
stack1.push(40)

// stack1.print()
// stack1.isEmpty()
// stack1.peek()
// stack1.size()

stack1.pop()
stack1.print()