class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a node to the end of the circular linked list
    add(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        // If list is empty, point head to new node and next to itself
        this.head = newNode;
        newNode.next = this.head;
      } else {
        // Otherwise, find the last node and adjust pointers
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
      }
    }
  
    // Method to delete the first node of the circular linked list
    deleteFirst() {
      if (!this.head) {
        console.log("List is empty, nothing to delete.");
        return;
      }
  
      if (this.head.next === this.head) {
        // Only one node in the list
        this.head = null;
      } else {
        // Find the last node
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        // Point last node's next to the second node
        current.next = this.head.next;
        // Move head to the second node
        this.head = this.head.next;
      }
    }
  
    // Method to print the circular linked list
    printList() {
      if (!this.head) {
        console.log("List is empty.");
        return;
      }
  
      let current = this.head;
      do {
        // console.log(current.data);
        process.stdout.write(current.data + " -> ")
        current = current.next;
      } while (current !== this.head);
    }
  }
  
// Example usage:
const list = new CircularLinkedList();
list.add(10);
list.add(20);
list.add(30);
  
console.log("Original List:");
list.printList();  // Output: 10 20 30
  
list.deleteFirst();
list.deleteFirst();
console.log("After deleting the first node:");
list.printList();  // Output: 20 30