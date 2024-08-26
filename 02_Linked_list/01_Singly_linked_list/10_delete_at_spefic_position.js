// Javascript program to delete a linked list node at a
// given position
class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

// Function to delete a node at a given position
function deleteNode(head, position)
{
    let temp = head;
    let prev = null;

    // Base case if linked list is empty
    if (temp === null)
        return head;

    // Case 1: Head is to be deleted
    if (position === 1) {
        head = temp.next;
        return head;
    }

    // Case 2: Node to be deleted is in middle
    // Traverse till given position
    for (let i = 1; temp !== null && i < position; i++) {
        prev = temp;
        temp = temp.next;
    }

    // If given position is found, delete node
    if (temp !== null) {
        prev.next = temp.next;
    }
    else {
        console.log("Data not present");
    }

    return head;
}

// Function to print the linked list
function printList(head)
{
    while (head !== null) {
        process.stdout.write(head.data + " -> ");
        head = head.next;
    }
    console.log("null");
}

// Driver code
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Print original list
console.log("Original list: ");
printList(head);

// Deleting node at position 2
let position = 2;
head = deleteNode(head, position);

// Print list after deletion
console.log("List after deletion: ");
printList(head);
