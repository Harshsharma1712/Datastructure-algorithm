class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items[this.items.length] = element
        console.log(`Pushed element: ${element}`)
    }

    pop(){
        if(this.items.length === 0){
            console.log("Stack is empty")
            return
        }

        const popedElement = this.items[this.items.length - 1]
        this.items.length -= 1
        console.log(`Poped element is: ${popedElement}`);
        return popedElement
    }

    // custom peek
    peek(){
        if (this.items.length === 0) {
            console.log("Stack is empty")
            return 
        }
        return this.items[this.items.length - 1]
    }

    print(){
        if(this.items.length === 0){
            console.log("Stack is empty");
            return
        }
        
        console.log(this.items);
    }
}

const stack = new Stack()

// stack.peek()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack.peek())
stack.print()

stack.pop()
console.log(stack.peek())