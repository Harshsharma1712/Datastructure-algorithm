class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

// function to insert node at end of the list

function append(head, newData){
    // create new node
    const newNode = new Node(newData)

    if(head === null){
        return newNode
    }

    let curr = head

    while(curr.next !== null){
        curr = curr.next
    }
    
    curr.next = newNode

    return head
}

function print(head){
    let curr = head

    let result = ""

    while(curr !== null){
        result += curr.data + " "

        curr = curr.next
    }

    console.log(result);
}

let head = new Node(2)
head.next = new Node(3)
head.next.next = new Node(4)

print(head)

head = append(head,80)
head = append(head,90)

print(head)