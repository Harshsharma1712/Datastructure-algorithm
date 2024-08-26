class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
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

        this.length++
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

let list = new DoublyLinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(-50)

list.printList()