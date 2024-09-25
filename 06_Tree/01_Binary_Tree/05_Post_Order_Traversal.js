/* 
            1
           / \
          2   3
         / \   \
        4   5   6

        Post Order Traversal => 4 -> 5 -> 2 -> 6 -> 3 -> 1
*/

class Node {
    constructor(v) {
      this.data = v;
      this.left = null;
      this.right = null;
    }
}

function printPostOrder(node) {
    if(node === null)
        return;

    // First recur on left subtree
    printPostOrder(node.left);

    // Then recur on right subtree
    printPostOrder(node.right);

    // Now deal with the node
    console.log(node.data);
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

console.log("Post Oreder traversal is: ");
printPostOrder(root);