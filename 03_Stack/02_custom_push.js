class Stack {
    constructor(){
        this.items = [];
    }

    // custom push method
    push(element){
        this.items[this.items.length] = element
        console.log(`Pushed element: ${element}`)
    }

    print(){
        console.log(this.items);
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.print()