class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}

class circularSinglyLinkedList {
    constructor(){
        this.head = null
    }

    insertAtBeginning(data){
        let newNode = new Node(data)

        // if the list is empty
        if(this.head === null){
            newNode.next = newNode
            this.head = newNode
        } else {
            let currnet = this.head

            while(currnet.next !== this.head){
                currnet = currnet.next
            }

            newNode.next = this.head

            currnet.next = newNode

            this.head = newNode
        }
    }

    display() {
        if (this.head === null) {
          console.log("List is empty");
          return;
        }
    
        let temp = this.head;
        do {
          console.log(temp.data);
          temp = temp.next;
        } while (temp !== this.head);
    }

}

const list = new circularSinglyLinkedList()

list.insertAtBeginning(10)
list.insertAtBeginning(20)
list.insertAtBeginning(30)

list.display()