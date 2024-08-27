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

    // method to remove value by it's node.
    deletebyvalue(value){
        // if list is empty
        if(!this.head) return 

        let currNode = this.head

        // if deleted value is in the head node
        if(currNode.value === value){
            this.head = currNode.next
            if(this.head){
                this.head.prev = null
            } else {
                // if list has only one node update tail --> null
                this.tail = null
            }
            return
        }

        while(currNode !== null && currNode.value !== value){
            currNode = currNode.next
        }

        // if node is not found
        if(!currNode){
            console.log("Value not found.")
            return
        }

        // if node to be deleted is in the tail node  
        if(currNode === this.tail){
            this.tail = currNode.prev
            this.tail.next = null
        } else {
            // if the node to be deleted is in the middle of the list
            currNode.prev.next = currNode.next
            currNode.next.prev = currNode.prev
        }
    }

    printList(){
        let curr = this.head
        let result = ""

        while(curr !== null){
            result += curr.value + " <-> "
            curr = curr.next
        }

        result += "null"

        console.log(result)
    }
}

let list = new DoublyLinkedList()

list.append(10)
list.append(50)
list.append(-47)
list.append(0)

list.printList()

list.deletebyvalue(10)
// list.deletebyvalue(-47)
// list.deletebyvalue(0)
// list.deletebyvalue(100)

list.printList()