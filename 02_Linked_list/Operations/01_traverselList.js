class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function traverselLinkedlist(head){

    while(head != null){
        process.stdout.write(head.data + " ")

        head = head.next
    }

    // console.log();
    
}

function main(){
    // hard coded method for creating linked list
    let head = new Node(10)
    head.next = new Node(20)
    head.next.next = new Node(30)
    head.next.next.next = new Node(40)

    traverselLinkedlist(head)
}

main();