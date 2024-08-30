class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.tail = null;  // Points to the last node in the list
      this.length = 0;   // Keeps track of the length of the list
    }
  
    // Helper method to add nodes to the list
    append(value) {
      const newNode = new Node(value);
      if (!this.tail) {
        // If the list is empty
        this.tail = newNode;
        this.tail.next = newNode; // Pointing to itself
      } else {
        // If the list has elements
        newNode.next = this.tail.next;
        this.tail.next = newNode;
        this.tail = newNode; // Update the tail to the new node
      }
      this.length++;
    }
  
    // Method to delete a node at a specific position
    deleteAtPosition(position) {
      // Edge cases
      if (position < 0 || position >= this.length || !this.tail) {
        console.log("Invalid position or list is empty");
        return;
      }
  
      if (position === 0) {
        // Case 1: Deleting the head (first node)
        if (this.length === 1) {
          // If there's only one element
          this.tail = null;
        } else {
          // More than one element
          this.tail.next = this.tail.next.next;
        }
      } else {
        // Case 2: Deleting node other than the head
        let current = this.tail.next; // Start from the head
        let previous = this.tail;
  
        for (let i = 0; i < position; i++) {
          previous = current;
          current = current.next;
        }
        
        previous.next = current.next;
        if (current === this.tail) {
          // If deleting the tail node, update the tail
          this.tail = previous;
        }
      }
  
      this.length--;
    }
  
    // Helper method to display the list
    display() {
      if (!this.tail) {
        console.log("List is empty");
        return;
      }
  
      let current = this.tail.next; // Start from the head
      let result = "";
  
      do {
        result += current.value + " -> ";
        current = current.next;
      } while (current !== this.tail.next);
  
      console.log(result + "(circular)");
    }
  }
  
  // Example usage
  const list = new CircularLinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  list.append(40);
  
  console.log("Original List:");
  list.display();
  
  console.log("Deleting at position 2:");
  list.deleteAtPosition(2);
  list.display();
  
  console.log("Deleting at position 0:");
  list.deleteAtPosition(0);
  list.display();
  