class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    deleteAtPosition(position){
        if(position < 0){
            console.log("Position out of bound.");
            return
        }

        let current = this.head
        let index = 0

        // if the list is empty
        if(!current){
            console.log("list is empty");
            return
        }

        // if position at head
        if(position === 0){
            if(this.head === this.tail){
                // only one node is present
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            return 
        }
        
         // Traverse to the node at the specified position
        while(current && index < position){
            current = current.next
            index++
        }

        if(!current){
            console.log("Position out of bound");
            return 
        }

        // if positioion at tail
        if(current = this.tail){
            this.tail = this.tail.prev
            this.tail.next = null
        }

        // if position at middle
        const previousNode = current.prev
        const nextNode = current.next

        if (previousNode) {
            previousNode.next = nextNode;
        }
      
          if (nextNode) {
            nextNode.prev = previousNode;
        }
    }

      // Method to append a new node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.data} <-> `);
      current = current.next;
    }
    console.log("null");
  }

}

const list = new DoublyLinkedList

list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.printList()

list.deleteAtPosition(2)
list.printList()