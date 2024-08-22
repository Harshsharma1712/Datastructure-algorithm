class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to append a new node at the end of the list
    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

    // Method to insert a new node after a given node
    insertAfter(key, newData) {
        let curr = this.head;

        // Iterate over Linked List to find the key
        while (curr !== null) {
            if (curr.data === key) break;
            curr = curr.next;
        }

        // If curr becomes null, the key is not found
        if (curr === null) return;

        // Create a new node and adjust pointers
        const newNode = new Node(newData);
        newNode.next = curr.next;
        curr.next = newNode;
    }

    // Method to print the linked list
    printList() {
        let curr = this.head;
        while (curr !== null) {
            process.stdout.write(curr.data + " ");
            curr = curr.next;
        }
        console.log();
    }
}

// Create a linked list and add nodes
const linkedList = new LinkedList();
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.append(6);

console.log("Original Linked List: ");
linkedList.printList();

// Insert a node after a given key
const key = 3, newData = 4;
linkedList.insertAfter(key, newData);

console.log("Linked List after insertion: ");
linkedList.printList();
