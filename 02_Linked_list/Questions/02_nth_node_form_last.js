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

    findNthFromLast(N){
        let len = 0;

        let temp = this.head

        while(temp !== null){
            temp = temp.next
            len++
        }

        if(len < N)
            return -1

        temp = this.head

        for(let i = 1; i < len - N + 1; i++){
            temp = temp.next
        }

        return temp.data
    }

    // Second Approch

    findNthFromLast2(N){
        let mainPointer = this.head
        let refPointer = this.head

        for(let i = 0; i < N; i++){
            refPointer = refPointer.next

            if(refPointer === null)
                return -1
        }

        while(refPointer.next !== null){
            refPointer = refPointer.next
            mainPointer = mainPointer.next
        }

        return mainPointer.data
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)

list.printList()

// console.log(list.findNthFromLast(3))
// console.log(list.findNthFromLast(2))

console.log(list.findNthFromLast2(3))