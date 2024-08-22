class Node{
    constructor(newData) {
        this.data = newData
        this.next = null
    }
}

function insertAtFront(head, newData){
    
    const newNode = new Node(newData)

    newNode.next = head

    return newNode

}

function printList(head){
    let curr = head

    let result = ""

    while(curr !== null){
        result += " " + curr.data

        curr = curr.next
    }

    // console.log(result)
}

let head = new Node(2)
head.next = new Node(10)
head.next.next = new Node(80)

// const data = 1;
head = insertAtFront(head, 50);

// Print the updated list
printList(head);

// +++++++++++++++++++++++ Second Approch ++++++++++++++++++++

// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//     }

//     addAtFront(data){
//         const node = new Node(data)

//         node.next = this.head

//         this.head = node
//     }

//     printList(){
//         let curr = this.head

//         while(curr !== null){
//             console.log(curr.data);
            
//             curr = curr.next
//         }
//     }
// }

// let list = new LinkedList()

// list.addAtFront(10)
// list.addAtFront(20)
// list.addAtFront(30)

// list.printList()