// Class representing a node in the linked list
class Node {
    constructor(newData) {
        this.data = newData;
        this.next = null;
    }
}

// Class to implement stack using a singly linked list
class Stack {
    constructor() {
        this.head = null;
    }

    // Function to check if the stack is empty
    isEmpty(){
        if(this.head === null){
            console.log("Stack is empty");
            return;
        }
        console.log("Stack is not empty")
        return
    }

    // Function to push an element onto the stack
    push(newData){
        const node = new Node(newData)

        // Check if memory allocation for the new node failed
        if(!node){
            console.log("Stack overflow");
            return 
        }

        // Link the new node to the current top node
        node.next = this.head

        this.head = node
    }    

    // Function to remove the top element from the stack
    pop(){
        // Check for stack underflow
        if(this.isEmpty()){
            console.log("Stack Underflow");
            return
        } else{
            let temp = this.head
        
            // Update the top to the next node
            this.head = this.head.next
    
            temp = null
        }
 
       
    }
}

const stack = new Stack()

stack.isEmpty()

stack.push(10)
stack.push(20)
stack.push(30)
stack.isEmpty()