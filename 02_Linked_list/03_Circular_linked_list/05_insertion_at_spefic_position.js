class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularSinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    insertAtPosition(data, position){
        let newNode = new Node(data)

        // if insert at position at head (position == 0)
        if(position === 0){
            // and if list is empty
            if(this.head === null){
                this.head = newNode
                this.tail = newNode
                newNode.next = newNode  //pointing to itself
            } else{
                newNode.next = this.head
                this.tail.next = newNode
                this.head = newNode
            }
            return 
        }

        let currnet = this.head
        let previous = null
        let count = 0

        while(currnet !== this.tail && count < position){
            previous = currnet
            currnet = currnet.next
            count++
        }


        // If position is exactly after the last element (current is tail)
        if(currnet === this.tail && count === position){
            newNode.next = this.head    //maintin circular structure
            this.tail.next = newNode
            this.tail = newNode
        } else if(count === position){
            // insrt at middle
            previous.next = newNode
            newNode.next = currnet
        } else {
            console.log("Position out of bound")
        }
    }

    // method for the insert at last
    insertAtEnd(data){
        let newNode = new Node(data)

        // if the list is empty
        if(this.head === null){
            newNode.next = newNode
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.next = this.head //maintin the circular structure
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    display() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        let temp = this.head;
        do {
            // console.log(temp.data);
            process.stdout.write(temp.data + " -> ")
            temp = temp.next;
        } while (temp !== this.head);
    }
}

let list = new CircularSinglyLinkedList()

list.insertAtEnd(10)
list.insertAtEnd(20)
list.insertAtEnd(30)
list.insertAtEnd(40)

list.display()

list.insertAtPosition(-50,2)
console.log("\n");
list.display()