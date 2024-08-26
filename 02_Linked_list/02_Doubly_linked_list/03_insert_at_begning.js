class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    prepend(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++;
    }

    printList(){
        let curr = this.head
        let result = ""

        while(curr !== null){
            result += curr.value + " <-> "
            curr = curr.next
        }

        console.log(result)
    }
}

const list = new DoublyLinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(-5)

list.printList()