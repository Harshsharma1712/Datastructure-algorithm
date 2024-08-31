class Stack{
    constructor() {
        this.items = []
    }

    // custom push to add element at last
    push(value){
        return this.items[this.items.length] = value
    }

    isEmpty(){
        return this.items.length === 0
    }

    print(){
        if(this.isEmpty())
            console.log("Stack is empty")

        console.log(this.items)
    }
}

const stack = new Stack()
// stack.isEmpty()

stack.push(10)
stack.push(20)
stack.push(30)
// stack.isEmpty()     //false

stack.print()