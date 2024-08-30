class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add a new node at the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            // If the list is empty, initialize head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;  // Point to itself since it's circular
        } else {
            this.tail.next = newNode;  // Old tail's next points to the new node
            newNode.next = this.head;  // New node's next points to head (circular)
            this.tail = newNode;       // Update the tail to be the new node
        }
    }

    // Method to delete the end node of the list
    deleteEndNode() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        if (this.head === this.tail) {
            // If there's only one node, clear the list
            this.head = null;
            this.tail = null;
            return;
        }

        let current = this.head;
        // Traverse the list to find the node just before the tail
        while (current.next !== this.tail) {
            current = current.next;
        }

        // Now 'current' is the node just before the tail
        current.next = this.head;  // Update next to point to the head
        this.tail = current;       // Update the tail to be the current node
    }

    // Helper method to print the list (for testing)
    printList() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        let current = this.head;
        do {
            process.stdout.write(current.value + " -> ");
            current = current.next;
        } while (current !== this.head);
        console.log("(head)");
    }
}

// Example usage:
const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);
cll.append(40);

console.log("Original list:");
cll.printList();

cll.deleteEndNode();

console.log("After deleting the end node:");
cll.printList();
