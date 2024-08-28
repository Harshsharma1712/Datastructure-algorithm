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

    getLength(){
        let count = 0

        let current = this.head

        while(current){
            current = current.next
            count++
        }

        console.log("length is: " + count)
    }

    printList(){
        let current = this.head
        let result = ""

        while(current){
            result += current.data + " <-> "
            current = current.next
        }

        result += "Null"

        console.log(result);
        
    }
}

const list = new DoublyLinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)

list.printList()

list.getLength()