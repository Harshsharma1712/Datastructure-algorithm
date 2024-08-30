class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class circularSinglyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
    }

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

let list = new circularSinglyLinkedList()

list.insertAtEnd(10)
list.insertAtEnd(20)
list.insertAtEnd(30)
list.insertAtEnd(40)

list.display()