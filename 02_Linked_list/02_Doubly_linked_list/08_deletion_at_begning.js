class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(value) {
        const newNode = new Node(value);

        // if list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    getLength() {
        let count = 0;
        let current = this.head;

        while (current) {
            current = current.next;
            count++;
        }

        console.log("Length is: " + count);
        return count; // Return the length for other use cases
    }

    printList() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.data + " <-> ";
            current = current.next; // Move to the next node
        }

        result += "Null";

        console.log(result);
    }

    removeAtBeginning() {
        if (!this.head) {
            console.log("The list is already empty.");
            return;
        }

        // If the list has only one node
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next; // Move head to the next node
            this.head.prev = null; // Remove reference to the old head
        }
    }
}

const list = new DoublyLinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.printList()
list.getLength()

list.removeAtBeginning()
list.printList()
list.getLength()