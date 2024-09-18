/* 
Note :- using array is not generally used in pratice as it not effective.
we use linked list or circular array to implement queue 
*/

class Queue {
    constructor(capacity) {
        this.capacity = capacity
        this.queue = new Array(capacity)
        this.front = 0
        this.rear = -1
    }

    // Function to insert an element at the rear of the queue
    enqueue(data) {
        // Check if the queue is full
        if (this.rear === this.capacity - 1) {
            console.log("Queue is full");
            return
        }

        this.queue[++this.rear] = data
    }

    // Function to delete an element from the front of the queue
    dequeue() {
        if (this.front > this.rear) {
            console.log("Queue is empty");
            return
        }
        // Shift all elements from index 1 till rear to the left by one
        for (let i = 0; i <= this.rear; i++) {
            this.queue[i] = this.queue[i + 1]
        }

        this.rear--
    }

    // Function to print queue elements
    display() {
        if (this.front > this.rear) {
            console.log("Queue is Empty");
            return;
        }

        // Traverse front to rear and print elements
        let result = '';
        for (let i = this.front; i <= this.rear; i++) {
            result += this.queue[i] + " <-- ";
        }
        console.log(result);
    }

    // Function to print the front of the queue
    frontElement() {
        if (this.rear === -1) {
            console.log("Queue is Empty");
            return;
        }
        console.log("Front Element is: " + this.queue[this.front]);
    }
}

const queue = new Queue(4)

// queue.display()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
// queue.enqueue(50)        //can't insert, queue is full

queue.display()

queue.dequeue()
queue.dequeue()

queue.display()

queue.frontElement()