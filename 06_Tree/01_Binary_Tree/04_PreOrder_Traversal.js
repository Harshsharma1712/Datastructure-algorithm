class Node {
    constructor(v) {
        this.data = v;
        this.left = null;
        this.right = null;
    }
}

function printPreOrder(node) {
    if(node === null)
        return;

    // Deal with the node
    console.log(node.data);

    // Recur on left subtree
    printPreOrder(node.left);

    // Recur on right subtree
    printPreOrder(node.right);
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

console.log("PreOrder Traverasl of given tree is:");
printPreOrder(root);