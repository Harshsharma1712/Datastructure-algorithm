class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Method to add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        // If the list is empty
        this.head = newNode;
        this.tail = newNode;
      } else {
        // If the list is not empty
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Method to remove a node from the end of the list
    removeFromEnd() {
      if (!this.tail) {
        // If the list is empty, nothing to remove
        console.log("List is empty, nothing to remove.");
        return;
      }
  
      if (this.head === this.tail) {
        // If there's only one node in the list
        this.head = null;
        this.tail = null;
      } else {
        // If there are multiple nodes
        const newTail = this.tail.prev;
        newTail.next = null;
        this.tail = newTail;
      }
    }
  
    // Method to print the list (for testing purposes)
    printList() {
      let current = this.head;
      while (current) {
        process.stdout.write(`${current.data} <-> `);
        current = current.next;
      }
      console.log("null");
    }
  }
  
  // Example usage
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  
  console.log("Original list:");
  list.printList();  // Output: 1 <-> 2 <-> 3 <-> null
  
  list.removeFromEnd();
  console.log("After removing from end:");
  list.printList();  // Output: 1 <-> 2 <-> null
  
  list.removeFromEnd();
  console.log("After removing another from end:");
  list.printList();  // Output: 1 <-> null
  
  list.removeFromEnd();
  console.log("After removing yet another from end:");
  list.printList();  // Output: null
  