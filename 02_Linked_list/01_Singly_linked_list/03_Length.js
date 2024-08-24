class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function countNodes(head){
    let curr = head

    let count = 0 

    while(curr !== null){
        count ++

        curr = curr.next
    }

    return count
}

let head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)
head.next.next.next = new Node(30)

console.log(countNodes(head))