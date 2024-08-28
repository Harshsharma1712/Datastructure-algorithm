class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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

    insertAtPosition(value, position) {
        const newNode = new Node(value);

        // Case 1: Insert at the head
        if (position === 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
            }
            this.head = newNode;

            // If the list was empty, set the new node as the tail
            if (!this.tail) {
                this.tail = newNode;
            }

            return;
        }

        let current = this.head;
        let index = 0;

        // Traverse to the position or the end of the list
        while (current && index < position) {
            current = current.next;
            index++;
        }

        // Case 2: Insert at the tail
        if (!current) {
            this.append(value);
            return;
        }

        // Case 3: Insert in the middle
        const prevNode = current.prev;
        newNode.next = current;
        newNode.prev = prevNode;

        if (prevNode) {
            prevNode.next = newNode;
        }
        current.prev = newNode;
    }
}

const list = new DoublyLinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.printList()
list.getLength()

// Note:- here I assume the list indexing from zero
list.insertAtPosition(-5,2)
list.printList()

list.getLength()