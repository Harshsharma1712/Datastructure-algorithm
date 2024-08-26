class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkdList {
    constructor(){
        this.head = null
    }

    append(data){
        const newNode = new Node(data)
        
        if(!this.head){
            this.head = newNode
            return
        }

        let curr = this.head
        while(curr.next) {
            curr = curr.next
        }
        curr.next = newNode
    }

    deleteNodoe(){
        if(!this.head){
            console.log("List is empty")
            return;
        }

        // If there iss one node
        if(!this.head.next){
            this.head = null
            return 
        }

        let curr = this.head

        // find second last node

        while(curr.next && curr.next.next){
            curr = curr.next
        }

        // remove last node
        curr.next = null
    }

    printList(){
        let curr = this.head
        let result = ""

        while(curr !== null){
            result += curr.data + " -> "

            curr = curr.next
        }

        result += "null"
        console.log(result)
    }
}

const list = new LinkdList()

list.append(10)
list.append(20)
list.append(-8)
list.append(-50)

list.printList()

list.deleteNodoe()

list.printList()