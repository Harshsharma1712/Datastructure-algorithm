class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        // Pointer to the front and the rear of the linked
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        /* If the front and rear are null, then the queue is
        empty, otherwise it's not */
        if(this.front === null && this.rear === null){
            console.log("Queue is empty.");
            return
        }
    }

    enqueue(new_data) {
        // Create a new linked list node
        const newNode = new Node(new_data);

        // If queue is empty than newNode is both front and rear.
        if(this.rear === null){
            this.front = this.rear = newNode;
            return
        }

        // Add the new node at the end of the queue and change rear
        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue() {
        // If queue is empty, return
        if(this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }

        const temp = this.front;
        this.front = this.front.next;

        // If front becomes null, then change rear also to null
        if (this.front === null) {
            this.rear = null;
        }
    }

    // Function to get the front element of the queue
    getFront() {
        if(this.isEmpty()) {
            console.log("Queue is empty.");
            return
        }
        console.log(`Fornt element is: ${this.front.data}`);
        return
    }

    // Function to get the rear element of the queue
    getRaer(){
        // Checking if the queue is empty
        if(this.isEmpty()){
            console.log("Queue is empty.");
            return
        }
        console.log(`Rear element is: ${this.rear.data}`);
        return
    }

    printQueue() {
        if (this.front === null) {
            console.log("Queue is empty");
            return;
        }

        let current = this.front;
        let queueValues = "";
        while (current !== null) {
            queueValues += current.data + " <- ";
            current = current.next;
        }
        queueValues += "null"; // End of the queue
        console.log(queueValues);
    }
}

const queue = new Queue();

// queue.isEmpty();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.printQueue();

queue.dequeue();
queue.dequeue();
queue.printQueue();

queue.getFront();
queue.getRaer();