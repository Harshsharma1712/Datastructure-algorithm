class Stack{
    constructor() {
        this.items = []
    }

    push(element){
        this.items[this.items.length] = element
        console.log(`Pushed element: ${element}`)
    }

    // custom pop
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

    print(){
        if(this.items.length === 0){
            console.log("Stack is empty");
            return
        }
        
        console.log(this.items);
    }
}

const stack = new Stack()

// stack.print()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.print()
stack.pop()
stack.pop()
stack.print()