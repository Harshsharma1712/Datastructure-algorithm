class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insertAt(value, position){
        const newNode = new Node(value)  //create new node

        if(position < 0){
            console.log("Invalid position");
            return
        }

        // if position is 0 means head of the linked list

        if(position === 0){
            newNode.next = this.head
            this.head = newNode
            return
        }

        // Traverse the list to find previous node of the desired node

        let current = this.head
        let previous = null
        let index = 0

        while(current !== null && index < position){
            previous = current
            current = current.next
            index++;
        }

        // if the position is out of range
        if(index !== position){
            console.log("Position out of range")
            return 
        }

        newNode.next = current
        previous.next = newNode
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current !== null) {
          result += current.value + " -> ";
          current = current.next;
        }
        result += "null";
        console.log(result);
      }
}

const list = new LinkedList()

list.insertAt(10,0)
list.insertAt(20,1)
list.insertAt(30,2)
list.insertAt(40,3)

console.log("Before:");
list.printList()

list.insertAt(-4,2)
list.insertAt(-5,3)

console.log("After:")
list.printList()