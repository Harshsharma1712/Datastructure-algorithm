class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function deleteAtFront(head){
    // if linked list is empty
    if(head === null)
        return null
    
    //Move head to the next node
    head = head.next

    return head
}

function print(head){
    let curr = head
    let result = ""

    while(curr !== null){
        result += curr.data + " -> "
        
        curr = curr.next
    }

    result += "null"

    console.log(result);
    
}

let head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)

console.log("Before deletion: ");
print(head)

let result = deleteAtFront(head)

console.log("After Deletion: ");
print(result)