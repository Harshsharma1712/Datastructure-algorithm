// Node class representing a single node in the list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}

// circular singly lisnked list class
class circularSinglyLinkedList{
    constructor(){
        this.head = null
    }

    // method to insert a node in list
    insertInEmpty(data){
        if(this.head !== null){
            console.log("List is not empty");
            return
        }

        //create a new node
        let newNode = new Node(data)

        // Point the new node's next to itself
        newNode.next = newNode

        // set the new node as the head of the list
        this.head = newNode
        console.log(`Inserted node with data: ${data}`)
    }

}

const list = new circularSinglyLinkedList()

list.insertInEmpty(10)