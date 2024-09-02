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

    // custom isEmpty
    isEmpty(){
        return this.items.length === 0
    }

    print(){
        if(this.items.length === 0){
            console.log("Stack is empty");
            return
        }
        
        console.log(this.items);
    }
}