// Note:- Time complecity of BFS implement through queue is O(n) [effective]

class Node {
    constructor(key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

// Iterative method to print the
// level order traversal of a binary tree
function printLevelOrder(root) {
    if(root === null) 
        return;

    // Create an empty queue for level order traversal
    const queue = [];

    // Enqueue root
    queue.push(root);

    while(queue.length > 0) {
        // Print front of queue and remove it from queue
        const node = queue.shift();
        console.log(node.data);

        // Enqueue left child
        if (node.left !== null)
            queue.push(node.left);

        // Enqueue right child
        if(node.right !== null)
            queue.push(node.right);
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

printLevelOrder(root);