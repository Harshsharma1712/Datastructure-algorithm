class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

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

    printList(){
        let result = ""
        let curr = this.head

        while(curr !== null){
            result += curr.data + " -> "
            curr = curr.next
        }

        result += "Null"
        
        console.log(result)
    }
    
}