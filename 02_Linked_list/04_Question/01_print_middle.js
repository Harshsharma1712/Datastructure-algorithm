/* Given a Singly Linked List, the task is to find the middle of the linked list.
If the number of nodes are even, then there would be two middlenodes,
so return the second middle node.

Input: linked list = 1 -> 2 -> 3 -> 4 -> 5
Output: 3 
Explanation: There are 5 nodes in the linked list and there is one middle 
whose value is 3.

Input: linked list = 1 -> 2 -> 3 -> 4 -> 5 -> 6
Output: 4 
Explanation: There are 6 nodes in the linked list, so we have two middle
nodes: 3 and 4,but we will return the second middle node which is 4.

*/

class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class singlyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }

    }

    printList(){
        let curr = this.head
        let result = ""

        while(curr !== null){
            result += curr.data + " -> "
            curr = curr.next
        }

        result += "Null"

        console.log(result)
    }

    printMiddle(){
        let slowPointer = this.head
        let fastPointer = this.head

        while(fastPointer !== null && fastPointer.next !== null){
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next
        }

        return slowPointer
    }
}

let list = new singlyLinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.printList()

const result = list.printMiddle()
console.log(result);