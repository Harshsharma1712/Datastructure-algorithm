class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    
    append(value){
        const newNode = new Node(value)

        // if list is empty
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode         
        }
    }

    traverseForward(){
        let currnet = this.head
        while(currnet) {
            process.stdout.write(currnet.data + " <-> ");
            currnet = currnet.next  
        }
    }

    traverseBackward(){
        let current = this.tail
        while(current){
            process.stdout.write(current.data + " <-> ");
            current = current.prev
        }
    }
}

const list = new DoublyLinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.traverseForward()
console.log("\n");

list.traverseBackward()