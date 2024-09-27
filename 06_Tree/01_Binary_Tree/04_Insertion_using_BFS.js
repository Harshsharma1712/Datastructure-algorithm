class Node {
    constructor(key) {
        this.data = key;
        this.left = null;
        this.right = null;
    }
}

// Function to insert a node into the binary tree
// Note:- here key is the value which we want to insert 
function insertNode(root, key) {
    // Create a new node with the given key
    const newNode = new Node(key);

    // If the tree is empty, make the new node the root
    if(root === null){
        root = newNode;
        return root;
    }

    // Create an empty queue for level order traversal (BFS)
    const queue = [];
    queue.push(root);

    // Do a BFS until we find an empty spot to insert the new node
    while(queue.length > 0) {
        const currnetNode = queue.shift();

        // Check if the left child is empty
        if(currnetNode.left === null){
            currnetNode.left = newNode;
            return root;
        } else {
            queue.push(currnetNode.left);
        }

        // Check if the right child is empty
        if(currnetNode.right === null) {
            currnetNode.right = newNode;
            return root;
        } else {
            queue.push(currnetNode.right);
        }
    }
}

// Function to print the level order traversal of the tree (BFS)
function printLevelOrder(root) {
    if(root == null)
        return;

    const queue = [];
    queue.push(root);

    while(queue.length > 0) {
        const node = queue.shift();
        console.log(node.data);
        
        if(node.left !== null)
            queue.push(node.left);

        if(node.right !== null)
            queue.push(node.right);
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);

console.log("BFS Before insertion: ");
printLevelOrder(root);

console.log("BFS after inserion: ");
insertNode(root, 10);

printLevelOrder(root);