class Node {
    constructor(v) {
        this.data = v;
        this.left = null;
        this.right = null;
    }
}

function printInOrderTraversal(node) {
    // Base case
    if(node === null)
        return;

    // First recur on left subtree
    printInOrderTraversal(node.left);

    // Now deal with the node
    console.log(node.data);
    // process.stdout.write(node.data + " ");

    // Then recur on right subtree
    printInOrderTraversal(node.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

/* 
            1
           / \
          2   3
         / \   \
        4   5   6
*/

console.log("In order traversal of given tree is:");
printInOrderTraversal(root);